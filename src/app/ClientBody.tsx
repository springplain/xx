"use client";

import { useEffect } from "react";
import { StoreProvider } from "@/lib/store-context";
import { BagDrawer } from "@/components/layout/BagDrawer";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased font-sans";
  }, []);

  return (
    <StoreProvider>
      <div className="antialiased font-sans">{children}</div>
      <BagDrawer />
    </StoreProvider>
  );
}
