"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Download, Globe, ShieldCheck, AudioWaveform } from "lucide-react";
import { EASE } from "@/lib/motion";
import { fireDownloadConfetti } from "@/lib/confetti";
import Spotlight from "@/components/effects/Spotlight";
import GlowButton from "@/components/effects/GlowButton";
import BorderBeam from "@/components/effects/BorderBeam";
import Tilt from "@/components/effects/Tilt";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 15, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE },
  },
};

const stats = [
  { value: "0.12 s", label: "análisis por pista" },
  { value: "100 %", label: "local, sin nube" },
  { value: "2", label: "formatos nativos: Rekordbox y Serato" },
];

const preview = {
  src: "/Img Smart Set Architech.png",
  width: 1919,
  height: 1028,
  alt: "Vista previa de la Biblioteca General de Smart Set Architect",
};

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute left-1/2 top-24 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.14),rgba(6,182,212,0.08)_48%,transparent_72%)] blur-2xl"
          animate={{ opacity: [0.5, 0.75, 0.5], scale: [1, 1.04, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="animate-drift absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-[70%] rounded-full bg-[#8b5cf6]/12 blur-[140px]"
          animate={{ opacity: [0.3, 0.55, 0.3], scale: [1, 1.08, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="animate-drift-2 absolute -top-20 left-1/2 h-[420px] w-[640px] -translate-x-[10%] rounded-full bg-[#06b6d4]/12 blur-[140px]"
          animate={{ opacity: [0.25, 0.5, 0.25], scale: [1.04, 0.96, 1.04] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <Spotlight id="spotlight-hero-cyan" fill="#06b6d4" className="left-[6%] top-0 rotate-[7deg]" />
        <Spotlight
          id="spotlight-hero-violet"
          fill="#8b5cf6"
          className="right-[-14%] top-[-4%] -rotate-[13deg]"
        />

        <div className="bg-noise absolute inset-0 opacity-[0.04]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 pt-40 pb-24 sm:px-8 sm:pt-48 sm:pb-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-cyan-300/20 bg-cyan-400/[0.06] px-4 py-1.5 text-xs font-medium tracking-wide text-neon">
              <span className="animate-pulse-dot size-1.5 rounded-full bg-neon shadow-[0_0_10px_2px_rgba(34,211,238,0.6)]" />
              Listo para Windows · v1.0
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-white text-balance sm:text-6xl lg:text-7xl"
          >
            La inteligencia que transforma tu biblioteca en{" "}
            <span className="text-gradient text-gradient-animated">sets perfectos</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-soft text-balance sm:text-xl"
          >
            Análisis armónico, curvas de energía e integración nativa con
            Rekordbox y Serato en segundos.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <GlowButton
              href="https://github.com/diegocarrillo8192-jpg/smart-set-studio/releases/download/v1.0.0/Smart-Set-Architect-Setup.exe"
              onClick={fireDownloadConfetti}
              innerClassName="btn-shine gap-2.5 bg-white px-7 py-3.5 text-[15px] font-medium text-[#0b0f17] shadow-[0_0_40px_-10px_rgba(103,232,249,0.55)] hover:bg-white/90 hover:shadow-[0_0_56px_-8px_rgba(103,232,249,0.7)] [--shine:rgba(103,232,249,0.55)]"
            >
              <Download className="size-4.5 transition-transform duration-300 group-hover:translate-y-0.5" />
              Descargar para Windows (.exe)
            </GlowButton>
            <a
              href="https://smart-set-studio-e6cf.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-[15px] font-medium text-white/85 backdrop-blur transition-all duration-300 hover:border-white/30 hover:text-white"
            >
              <Globe className="size-4.5 text-neon" />
              Probar Demo Web
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-16 w-full max-w-5xl">
            <Tilt max={3}>
              <div className="group relative overflow-hidden rounded-2xl border border-slate-800/50 bg-[#0d1119]/80 shadow-[0_40px_90px_-45px_rgba(0,0,0,0.9),0_0_90px_-45px_rgba(103,232,249,0.3)] backdrop-blur-md transition-all duration-500 hover:border-slate-700/70 hover:shadow-[0_50px_110px_-45px_rgba(0,0,0,0.95),0_0_110px_-40px_rgba(167,139,250,0.4)]">
                <BorderBeam duration={11} className="opacity-0 group-hover:opacity-90" />
                <div className="flex items-center gap-1.5 border-b border-slate-800 px-4 py-2.5 sm:px-5">
                  <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="size-2.5 rounded-full bg-[#febc2e]" />
                  <span className="size-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-2 hidden items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-white/35 sm:inline-flex">
                    <AudioWaveform className="size-3 text-neon" />
                    Smart Set Architect — Biblioteca
                  </span>
                </div>
                <Image
                  src={preview.src}
                  alt={preview.alt}
                  width={preview.width}
                  height={preview.height}
                  priority
                  sizes="(max-width: 768px) 100vw, 1024px"
                  className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.008]"
                />
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0b0f17]/30 via-transparent to-transparent" />
              </div>
            </Tilt>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-16 grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3 sm:divide-x sm:divide-white/10"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 sm:px-6">
                <span className="font-mono text-2xl font-medium text-white">{stat.value}</span>
                <span className="text-xs text-soft">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.p
            variants={item}
            className="mt-10 inline-flex items-center gap-2 text-xs text-white/40"
          >
            <ShieldCheck className="size-3.5 text-neon/70" />
            Sin registro · Sin telemetría · Tus pistas nunca salen de tu equipo
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}