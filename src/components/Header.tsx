"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, Apple, MonitorDown, ChevronDown } from "lucide-react";
import Logo from "@/components/Logo";
import { cn } from "@/lib/cn";
import { WINDOWS_URL, MACOS_URL } from "@/lib/download";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Demo", href: "#demo" },
  { label: "Descarga", href: "#download" },
];

const downloadOptions = [
  { label: "Descargar para Windows (.exe)", icon: MonitorDown, href: WINDOWS_URL },
  { label: "Descargar para macOS (.dmg)", icon: Apple, href: MACOS_URL },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);
  const downloadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (downloadRef.current && !downloadRef.current.contains(event.target as Node)) {
        setDownloadOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
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
          <div ref={downloadRef} className="relative hidden sm:block">
            <button
              type="button"
              onClick={() => setDownloadOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={downloadOpen}
              className="btn-shine inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur transition-all duration-200 hover:border-cyan-300/40 hover:bg-white/10"
            >
              <Download className="size-4 text-neon" />
              Descargar
              <ChevronDown
                className={cn(
                  "size-3.5 text-white/50 transition-transform duration-200",
                  downloadOpen && "rotate-180"
                )}
              />
            </button>

            <AnimatePresence>
              {downloadOpen && (
                <motion.div
                  role="menu"
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute right-0 top-full z-50 mt-2 w-72 origin-top-right overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f17]/95 p-1.5 shadow-[0_24px_70px_-24px_rgba(0,0,0,0.9),0_0_40px_-20px_rgba(103,232,249,0.25)] backdrop-blur-xl"
                >
                  {downloadOptions.map(({ label, icon: Icon, href }) => (
                    <a
                      key={href}
                      role="menuitem"
                      href={href}
                      onClick={() => setDownloadOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/80 transition-colors duration-200 hover:bg-white/5 hover:text-white"
                    >
                      <span className="flex size-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-neon">
                        <Icon className="size-4" strokeWidth={1.8} />
                      </span>
                      {label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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
              {downloadOptions.map(({ label, icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="btn-shine mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-[#0b0f17] [--shine:rgba(103,232,249,0.55)]"
                >
                  <Icon className="size-4" />
                  {label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}