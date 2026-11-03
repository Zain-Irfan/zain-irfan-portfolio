"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setTheme(
      document.documentElement.getAttribute("data-theme") === "light"
        ? "light"
        : "dark",
    );
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || open
          ? "border-b border-line bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/#top" className="font-mono text-lg font-semibold">
          <span className="text-accent">&lt;</span>
          {profile.shortName}
          <span className="text-accent"> /&gt;</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {l.label}
            </Link>
          ))}
          <ThemeButton theme={theme} onClick={toggleTheme} />
          <Link
            href="/#contact"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Hire me
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeButton theme={theme} onClick={toggleTheme} />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="rounded-md p-2 text-muted hover:text-fg"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line px-4 pb-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-muted hover:text-fg"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-accent py-3 text-center font-medium text-white"
          >
            Hire me
          </Link>
        </div>
      )}
    </header>
  );
}

function ThemeButton({
  theme,
  onClick,
}: {
  theme: "dark" | "light";
  onClick: () => void;
}) {
  return (
    <button
      aria-label="Toggle theme"
      onClick={onClick}
      className="rounded-md border border-line p-2 text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
