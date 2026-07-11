"use client";

import { useState } from "react";
import { TopBar } from "./TopBar";
import { Header } from "./Header";
import { SubNav } from "./SubNav";
import { PromoBanner } from "./PromoBanner";
import { Footer } from "./Footer";
import { MobileMenu } from "./MobileMenu";

export function SiteShell({
  children,
  gender,
  showSubNav = false,
}: {
  children: React.ReactNode;
  gender?: "women" | "men";
  showSubNav?: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50">
        <TopBar />
        <Header onMenuClick={() => setMenuOpen(true)} />
        {showSubNav && gender && <SubNav gender={gender} />}
        <PromoBanner />
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
