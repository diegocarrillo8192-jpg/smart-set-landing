"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Library,
  AudioWaveform,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { fadeUp, staggerContainer } from "@/lib/motion";
import BorderBeam from "@/components/effects/BorderBeam";
import Spotlight from "@/components/effects/Spotlight";
import Tilt from "@/components/effects/Tilt";

type ShowcaseProps = {
  id?: string;
};

const details: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Library,
    title: "Análisis de biblioteca",
    description:
      "BPM, clave y energía detectados de forma 100 % local, con recomendaciones armónicas basadas en la rueda Camelot para cada pista.",
  },
  {
    icon: AudioWaveform,
    title: "Ondas y curvas de energía",
    description:
      "Lee cada pista de un vistazo: forma de onda y picos de energía secuenciados para construir el viaje del set.",
  },
  {
    icon: LayoutGrid,
    title: "Interfaz de decks",
    description:
      "Vista de decks sincronizada 1:1 con la grilla, Hot Cues y loops cuantizados listos para exportar.",
  },
];

const screenshot = {
  src: "/smart-set-b.png",
  width: 1916,
  height: 1024,
  alt: "Análisis de biblioteca, ondas e interfaz de decks de Smart Set Architect",
};

export default function Showcase({ id }: ShowcaseProps) {
  return (
    <section id={id} className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-500/[0.08] blur-[140px]" />
        <div className="absolute left-1/2 top-1/2 h-[360px] w-[560px] -translate-x-1/2 rounded-full bg-violet-600/[0.08] blur-[140px]" />
        <Spotlight
          id="spotlight-showcase"
          fill="#a78bfa"
          className="left-1/2 top-[30%] h-[360px] w-[860px] -translate-x-1/2 -rotate-3"
        />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Detalles técnicos"
          title="Biblioteca, ondas y decks bajo control"
          subtitle="La segunda vista de Smart Set Architect: análisis profundo, curvas de energía y la interfaz de decks sincronizada a la grilla."
        />

        <Reveal className="mt-14 sm:mt-16">
          <motion.div variants={fadeUp} className="mx-auto w-full max-w-5xl">
            <Tilt max={3}>
              <div className="group relative">
                <div className="pointer-events-none absolute -inset-x-12 -top-14 -bottom-12 rounded-[40px] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),rgba(6,182,212,0.1)_50%,transparent_75%)] blur-3xl transition-transform duration-700 group-hover:scale-[1.03]" />

                <div className="relative rounded-2xl bg-gradient-to-b from-white/20 via-white/[0.07] to-transparent p-px shadow-[0_50px_120px_-50px_rgba(0,0,0,0.95),0_0_100px_-45px_rgba(167,139,250,0.3)] transition-shadow duration-500 group-hover:shadow-[0_60px_140px_-50px_rgba(0,0,0,1),0_0_120px_-40px_rgba(167,139,250,0.45)]">
                  <div className="relative overflow-hidden rounded-[15px] bg-[#0d1119]/90 backdrop-blur-md">
                    <BorderBeam duration={10} className="opacity-0 group-hover:opacity-90" />

                    <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
                      <div className="flex gap-1.5">
                        <span className="size-3 rounded-full bg-[#ff5f57]" />
                        <span className="size-3 rounded-full bg-[#febc2e]" />
                        <span className="size-3 rounded-full bg-[#28c840]" />
                      </div>
                      <span className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 sm:flex">
                        <AudioWaveform className="size-3.5 text-neon" />
                        Smart Set Architect — Análisis
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-white/35">
                        v1.1.5
                      </span>
                    </div>

                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={screenshot.width}
                      height={screenshot.height}
                      sizes="(max-width: 768px) 100vw, 1024px"
                      className="relative z-10 h-auto w-full transition-transform duration-700 group-hover:scale-[1.008]"
                    />

                    <div className="pointer-events-none absolute inset-0 z-10 rounded-[15px] bg-gradient-to-t from-[#0b0f17]/30 via-transparent to-transparent" />
                    <div className="pointer-events-none absolute inset-0 z-10 rounded-[15px] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-x-8 -bottom-8 -z-10 h-24 rounded-[50%] bg-[#0b0f17] blur-2xl" />
              </div>
            </Tilt>
          </motion.div>
        </Reveal>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mt-12 grid w-full max-w-5xl grid-cols-1 gap-5 md:grid-cols-3 sm:mt-16"
        >
          {details.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              key={title}
              variants={fadeUp}
              className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-white/[0.06] hover:shadow-[0_28px_70px_-30px_rgba(0,0,0,0.9),0_0_50px_-20px_rgba(103,232,249,0.3)]"
            >
              <BorderBeam duration={8} className="opacity-0 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <span className="relative flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/15 to-violet-500/15 text-neon transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_28px_-8px_rgba(103,232,249,0.55)]">
                <Icon className="size-5.5" strokeWidth={1.8} />
              </span>

              <div className="relative mt-5 flex items-center gap-2.5">
                <h3 className="text-base font-medium tracking-tight text-white">
                  {title}
                </h3>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white/40">
                  0{index + 1}
                </span>
              </div>

              <p className="relative mt-2.5 text-sm leading-relaxed text-soft">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
