import { Disc, AtSign, Rss } from "lucide-react";
import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";

const columns = [
  {
    title: "Producto",
    links: [
      { label: "Features", href: "#features" },
      { label: "Demo en vivo", href: "https://smart-set-studio-e6cf.vercel.app" },
      { label: "Descarga", href: "#download" },
      { label: "Notas de versión", href: "#" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Documentación", href: "#" },
      { label: "Roadmap", href: "#" },
      { label: "Soporte", href: "#" },
      { label: "Contacto", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacidad", href: "#" },
      { label: "Términos", href: "#" },
      { label: "Licencia", href: "#" },
    ],
  },
];

const socials = [
  { icon: Disc, label: "Comunidad", href: "#" },
  { icon: AtSign, label: "Contacto", href: "#" },
  { icon: Rss, label: "Noticias", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090c12]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <Reveal>
          <div className="grid grid-cols-2 gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-soft">
              Análisis armónico y estructuración de sets para DJs modernos.
              Tus pistas, tu set, tu visión.
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-200 hover:border-white/30 hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
                {column.title}
              </span>
              <ul className="mt-4 flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-soft transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 sm:flex-row">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} Smart Set Architect. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4 font-mono text-[11px] text-white/35">
              <span>v1.1.0</span>
              <span className="size-1 rounded-full bg-white/20" />
              <span>Diseñado para DJs</span>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}