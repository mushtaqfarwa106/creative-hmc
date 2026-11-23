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
          <img
            src="/images/Creative logo-01.png"
            alt="Creative HMC"
          />
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

        <div className="hd-actions">
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
      </div>
    </header>
  );
}