"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Library, AudioWaveform } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/cn";
import BorderBeam from "@/components/effects/BorderBeam";
import Spotlight from "@/components/effects/Spotlight";
import Tilt from "@/components/effects/Tilt";

type ShowcaseProps = {
  id?: string;
};

type Tab = "library" | "generator";

const tabs: Array<{ id: Tab; label: string; icon: typeof Library }> = [
  { id: "library", label: "Biblioteca & Recomendaciones", icon: Library },
  { id: "generator", label: "Smart Set Generator", icon: AudioWaveform },
];

const views: Record<
  Tab,
  { src: string; width: number; height: number; alt: string }
> = {
  library: {
    src: "/Img Smart Set Architech.png",
    width: 1919,
    height: 1028,
    alt: "Vista de Biblioteca General y Recomendaciones de Smart Set Architect",
  },
  generator: {
    src: "/Img-Smart-Set-Architech.png",
    width: 1919,
    height: 1030,
    alt: "Vista del Generador de Smart Sets de Smart Set Architect",
  },
};

export default function Showcase({ id }: ShowcaseProps) {
  const [active, setActive] = useState<Tab>("library");
  const view = views[active];

  return (
    <section id={id} className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[140px]" />
        <div className="absolute left-1/3 top-1/2 h-[360px] w-[560px] -translate-x-1/2 rounded-full bg-violet-600/[0.07] blur-[140px]" />
        <Spotlight
          id="spotlight-showcase"
          fill="#a78bfa"
          className="left-1/2 top-[35%] h-[360px] w-[860px] -translate-x-1/2 -rotate-3"
        />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Demo en vivo"
          title="Así se ve Smart Set Architect"
          subtitle="Tu biblioteca analizada, recomendaciones armónicas y el generador de sets trabajando sobre pistas reales."
        />

        <Reveal stagger={0.12} className="mt-14">
          <motion.div variants={fadeUp} className="flex justify-center">
            <div
              role="tablist"
              aria-label="Vistas de la aplicación"
              className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur"
            >
              {tabs.map(({ id: tabId, label, icon: Icon }) => {
                const isActive = active === tabId;
                return (
                  <button
                    key={tabId}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(tabId)}
                    className={cn(
                      "relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-200 sm:px-5",
                      isActive ? "text-white" : "text-soft hover:text-white/80"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="view-tab-pill"
                        transition={{ type: "spring", stiffness: 450, damping: 32 }}
                        className="absolute inset-0 rounded-full border border-cyan-300/30 bg-gradient-to-r from-cyan-400/15 to-violet-500/15"
                      />
                    )}
                    <Icon className="relative size-3.5" strokeWidth={2} />
                    <span className="relative">{label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Tilt max={4} className="mt-8">
              <div className="group relative rounded-2xl border border-slate-800/50 bg-[#0d1119]/80 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9),0_0_80px_-40px_rgba(103,232,249,0.3)] backdrop-blur-md transition-all duration-500 hover:scale-[1.01] hover:border-slate-700/80 hover:shadow-[0_48px_100px_-40px_rgba(0,0,0,0.95),0_0_110px_-35px_rgba(167,139,250,0.45)]">
                <BorderBeam duration={10} className="opacity-0 group-hover:opacity-90" />
                <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3 sm:px-5">
                  <div className="flex gap-1.5">
                    <span className="size-3 rounded-full bg-[#ff5f57]" />
                    <span className="size-3 rounded-full bg-[#febc2e]" />
                    <span className="size-3 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 sm:flex">
                    <AudioWaveform className="size-3.5 text-neon" />
                    Smart Set Architect — Vista previa
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white/35">
                    {active === "library" ? "Library" : "Generator"}
                  </span>
                </div>

                <div className="relative overflow-hidden rounded-b-2xl">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Image
                        src={view.src}
                        alt={view.alt}
                        width={view.width}
                        height={view.height}
                        sizes="(max-width: 768px) 100vw, 1152px"
                        className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.012]"
                      />
                    </motion.div>
                  </AnimatePresence>

                  <div className="pointer-events-none absolute inset-0 rounded-b-2xl bg-gradient-to-t from-[#0b0f17]/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </div>
            </Tilt>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}