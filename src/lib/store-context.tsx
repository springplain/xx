"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type BagItem = {
  id: string;
  brand: string;
  name: string;
  price: number;
  image: string;
  size?: string;
  qty: number;
};

type StoreContextValue = {
  bag: BagItem[];
  wishlist: string[];
  bagCount: number;
  bagTotal: number;
  bagOpen: boolean;
  setBagOpen: (open: boolean) => void;
  addToBag: (item: Omit<BagItem, "qty">) => void;
  removeFromBag: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  toggleWishlist: (id: string) => void;
  isWished: (id: string) => boolean;
};

const StoreContext = createContext<StoreContextValue | null>(null);

const BAG_KEY = "dsos-bag";
const WISHLIST_KEY = "dsos-wishlist";
const LEGACY_BAG_KEY = "asos-bag";
const LEGACY_WISHLIST_KEY = "asos-wishlist";

function readStorage(key: string, legacyKey: string): string | null {
  return localStorage.getItem(key) ?? localStorage.getItem(legacyKey);
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [bag, setBag] = useState<BagItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [bagOpen, setBagOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const b = readStorage(BAG_KEY, LEGACY_BAG_KEY);
      const w = readStorage(WISHLIST_KEY, LEGACY_WISHLIST_KEY);
      if (b) setBag(JSON.parse(b));
      if (w) setWishlist(JSON.parse(w));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(BAG_KEY, JSON.stringify(bag));
  }, [bag, hydrated]);

  useEffect(() => {
    if (hydrated) localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  const addToBag = (item: Omit<BagItem, "qty">) => {
    setBag((prev) => {
      const existing = prev.find((p) => p.id === item.id && p.size === item.size);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id && p.size === item.size
            ? { ...p, qty: p.qty + 1 }
            : p,
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setBagOpen(true);
  };

  const removeFromBag = (id: string) =>
    setBag((prev) => prev.filter((p) => p.id !== id));

  const updateQty = (id: string, qty: number) =>
    setBag((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: Math.max(0, qty) } : p))
        .filter((p) => p.qty > 0),
    );

  const toggleWishlist = (id: string) =>
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id],
    );

  const value = useMemo<StoreContextValue>(() => {
    const bagCount = bag.reduce((sum, i) => sum + i.qty, 0);
    const bagTotal = bag.reduce((sum, i) => sum + i.qty * i.price, 0);
    return {
      bag,
      wishlist,
      bagCount,
      bagTotal,
      bagOpen,
      setBagOpen,
      addToBag,
      removeFromBag,
      updateQty,
      toggleWishlist,
      isWished: (id: string) => wishlist.includes(id),
    };
  }, [bag, wishlist, bagOpen]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}
