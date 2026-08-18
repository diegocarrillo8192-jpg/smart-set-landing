"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { cn } from "@/lib/cn";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Demo", href: "#demo" },
  { label: "Descarga", href: "#download" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[#0b0f17]/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-soft transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/Smart-Set-Architect-Setup.exe"
            download
            className="btn-shine hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur transition-all duration-200 hover:border-cyan-300/40 hover:bg-white/10 sm:inline-flex"
          >
            <Download className="size-4 text-neon" />
            Descargar .exe
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-white/10 bg-[#0b0f17]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-soft transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/Smart-Set-Architect-Setup.exe"
                download
                onClick={() => setOpen(false)}
                className="btn-shine mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-[#0b0f17] [--shine:rgba(103,232,249,0.55)]"
              >
                <Download className="size-4" />
                Descargar .exe
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}