"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="w">
        <Link className="logo" href="/">
          <svg viewBox="0 0 40 40">
            <path d="M7 15a15 15 0 0 1 26 0" fill="none" stroke="#111" strokeWidth="7" />
            <path d="M7 25a15 15 0 0 0 26 0" fill="none" stroke="#111" strokeWidth="7" />
          </svg>
          Creative HMC
        </Link>

        <nav className={menuOpen ? "open" : ""}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "on" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="btn r" style={{ margin: 0 }} href="/contact">
          Start a Project
        </Link>
        <button
          type="button"
          className="mbtn"
          aria-label="Menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}