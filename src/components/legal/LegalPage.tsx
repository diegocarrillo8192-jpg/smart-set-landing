import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";

export type LegalSection = {
  heading: string;
  paragraphs?: ReactNode[];
  bullets?: ReactNode[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  updated: string;
  intro: ReactNode;
  sections: LegalSection[];
  footerNote?: ReactNode;
};

export default function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
  footerNote,
}: LegalPageProps) {
  return (
    <>
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-50">
        <div className="absolute -top-32 left-[12%] h-[520px] w-[520px] rounded-full bg-violet-600/[0.1] blur-[160px]" />
        <div className="absolute top-[38%] right-[8%] h-[480px] w-[480px] rounded-full bg-cyan-500/[0.08] blur-[160px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0f17]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Logo href="/" />
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-soft backdrop-blur transition-all duration-200 hover:border-white/30 hover:text-white"
          >
            <ArrowLeft className="size-3.5" />
            Volver al inicio
          </Link>
        </div>
      </header>

      <main className="relative flex-1">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-neon">
            {eyebrow}
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white text-balance sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 font-mono text-xs text-white/40">Última actualización: {updated}</p>
          <p className="mt-6 text-base leading-relaxed text-soft sm:text-lg">{intro}</p>

          <div className="mt-14 flex flex-col gap-10">
            {sections.map((section, index) => (
              <section
                key={section.heading}
                className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
                <h2 className="flex items-start gap-3 text-lg font-semibold tracking-tight text-white sm:text-xl">
                  <span className="mt-0.5 font-mono text-sm text-neon/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {section.heading}
                </h2>

                {section.paragraphs?.map((paragraph, i) => (
                  <p key={`p-${i}`} className="mt-4 text-sm leading-relaxed text-soft">
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {section.bullets.map((bullet, i) => (
                      <li
                        key={`b-${i}`}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-soft"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-neon/70" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {footerNote !== undefined && (
            <div className="mt-10 flex items-start gap-3 rounded-2xl border border-cyan-300/20 bg-cyan-400/[0.05] px-5 py-4 text-sm leading-relaxed text-soft">
              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-neon" />
              <p>{footerNote}</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
