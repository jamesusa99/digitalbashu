"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Languages } from "lucide-react";

const navItemsCN = [
  { href: "/", label: "首页" },
  { href: "/about", label: "研究院概况" },
  { href: "/culture-system", label: "文化体系" },
  { href: "/research", label: "数字成果" },
  { href: "/industry", label: "产业赋能" },
  { href: "/cooperation", label: "合作交流" },
  { href: "/talent-cultivation", label: "人才培养" },
  { href: "/news", label: "资讯动态" },
  { href: "/contact", label: "联系我们" },
];

const navItemsEN = [
  { href: "/en", label: "Home" },
  { href: "/en/about", label: "Institute" },
  { href: "/en/culture-system", label: "Culture" },
  { href: "/en/research", label: "Outcomes" },
  { href: "/en/industry", label: "Industry" },
  { href: "/en/cooperation", label: "Cooperation" },
  { href: "/en/talent-cultivation", label: "Talent Dev." },
  { href: "/en/news", label: "News" },
  { href: "/en/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isEN = pathname.startsWith("/en");
  const navItems = isEN ? navItemsEN : navItemsCN;

  // Build the equivalent page URL in the other language
  const toggleHref = isEN
    ? pathname === "/en" ? "/" : pathname.replace(/^\/en/, "") || "/"
    : pathname === "/" ? "/en" : `/en${pathname}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/80 bg-snow/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href={isEN ? "/en" : "/"}
          className="font-serif text-base font-semibold text-bashu-bronze transition hover:text-bashu-bronze-light sm:text-lg"
        >
          {isEN ? "Bashu Culture Digital Institute" : "巴蜀文化数字研究院"}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const isAlliance = false;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-md px-2.5 py-2 text-sm transition ${
                  isActive
                    ? "text-bashu-bronze font-medium"
                    : "text-foreground/80 hover:text-bashu-bronze hover:bg-paper-warm/60"
                } ${isAlliance ? "text-brocade-gold font-medium" : ""}`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-bashu-bronze"
                    transition={{ type: "spring", duration: 0.4 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={toggleHref}
            className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted transition hover:border-bashu-bronze/50 hover:text-bashu-bronze"
            title={isEN ? "切换中文" : "Switch to English"}
          >
            <Languages size={14} />
            {isEN ? "中文" : "EN"}
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-ink lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-snow lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm ${
                    pathname === item.href
                      ? "bg-paper-warm text-bashu-bronze font-medium"
                      : "text-foreground/90"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
