"use client";

import { useRef, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import {
  MonitorDown,
  Apple,
  Check,
  Cpu,
  MemoryStick,
  HardDrive,
  Monitor,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/cn";
import BorderBeam from "@/components/effects/BorderBeam";
import GlowButton from "@/components/effects/GlowButton";
import { fireDownloadConfetti } from "@/lib/confetti";
import { WINDOWS_URL, MACOS_URL } from "@/lib/download";

type DownloadSectionProps = {
  id?: string;
};

const checks = [
  "Escaneo local de alta velocidad",
  "Exportación XML integrada",
  "Actualizaciones automáticas",
];

const requirements: Record<"windows" | "macos", { icon: typeof Monitor; label: string }[]> = {
  windows: [
    { icon: Monitor, label: "Windows 10 / 11 · 64-bit" },
    { icon: Cpu, label: "CPU de 2 núcleos · 2 GHz" },
    { icon: MemoryStick, label: "4 GB de RAM" },
    { icon: HardDrive, label: "500 MB de espacio libre" },
  ],
  macos: [
    { icon: Apple, label: "macOS 11 (Big Sur) o superior" },
    { icon: Cpu, label: "Apple Silicon M1/M2/M3/M4 e Intel" },
    { icon: MemoryStick, label: "4 GB de RAM" },
    { icon: HardDrive, label: "500 MB de espacio libre" },
  ],
};

const platforms = [
  { id: "windows" as const, label: "Windows", icon: MonitorDown },
  { id: "macos" as const, label: "macOS", icon: Apple },
];

export default function DownloadSection({ id }: DownloadSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [spotVisible, setSpotVisible] = useState(false);
  const [platform, setPlatform] = useState<"windows" | "macos">("windows");

  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  return (
    <section id={id} className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-500/[0.08] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Descarga"
          title="Instala Smart Set Architect"
          subtitle="Una descarga. Instalación en segundos. Tu biblioteca analizada al instante."
        />

        <Reveal stagger={0.12} className="mt-14">
          <motion.div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseEnter={() => setSpotVisible(true)}
            onMouseLeave={() => setSpotVisible(false)}
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="relative overflow-hidden rounded-3xl border border-slate-800/50 bg-surface/60 backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:border-cyan-300/25 hover:shadow-[0_50px_100px_-50px_rgba(0,0,0,0.95),0_0_90px_-35px_rgba(103,232,249,0.4)] lg:grid lg:grid-cols-[1.1fr_1fr]"
          >
            <div
              className={cn(
                "pointer-events-none absolute inset-0 z-0 transition-opacity duration-500",
                spotVisible ? "opacity-100" : "opacity-0"
              )}
              style={{
                background: `radial-gradient(420px circle at ${position.x}px ${position.y}px, rgba(167,139,250,0.09), transparent 65%)`,
              }}
            />
            <BorderBeam duration={9} className="opacity-0 group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
            <div className="pointer-events-none absolute -top-24 left-1/4 z-0 h-64 w-96 rounded-full bg-cyan-500/10 blur-[100px]" />

            <div className="relative z-10 flex flex-col p-8 sm:p-12">
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="inline-flex size-16 items-center justify-center rounded-2xl border border-cyan-300/25 bg-gradient-to-br from-cyan-400/15 to-violet-500/15 shadow-[0_0_50px_-12px_rgba(34,211,238,0.5)]"
              >
                <MonitorDown className="size-8 text-cyan-300" strokeWidth={1.6} />
              </motion.div>

              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Escritorio · Windows y macOS
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-soft">
                La versión nativa con análisis completo, gestión de biblioteca y
                exportación directa a Rekordbox y Serato.
              </p>

              <ul className="mt-6 flex flex-col gap-2.5">
                {checks.map((check) => (
                  <li key={check} className="flex items-center gap-2.5 text-sm text-white/75">
                    <span className="flex size-5 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-400/10">
                      <Check className="size-3 text-neon" strokeWidth={3} />
                    </span>
                    {check}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <GlowButton
                  href={WINDOWS_URL}
                  onClick={fireDownloadConfetti}
                  className="rounded-xl [--glow-duration:3.5s]"
                  innerClassName="btn-shine gap-2.5 bg-[#0d1119] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_0_50px_-12px_rgba(139,92,246,0.6)] hover:shadow-[0_0_64px_-10px_rgba(139,92,246,0.8)]"
                >
                  <MonitorDown className="size-4.5 transition-transform duration-300 group-hover:translate-y-0.5" />
                  Descargar para Windows (.exe)
                </GlowButton>
                <GlowButton
                  href={MACOS_URL}
                  onClick={fireDownloadConfetti}
                  className="rounded-xl [--glow-duration:3.5s]"
                  innerClassName="btn-shine gap-2.5 border border-white/15 bg-white/[0.04] px-7 py-3.5 text-[15px] font-semibold text-white backdrop-blur transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/10"
                >
                  <Apple className="size-4.5 transition-transform duration-300 group-hover:translate-y-0.5" />
                  Descargar para macOS (.dmg)
                </GlowButton>
                <a
                  href="#download"
                  className="inline-flex items-center justify-center gap-1.5 text-sm text-white/55 transition-colors hover:text-white"
                >
                  Notas de la versión
                  <ArrowRight className="size-3.5" />
                </a>
              </div>

              <p className="mt-4 font-mono text-[11px] text-white/40">
                Instalador ~185 MB · v1.1.0 estable · Sin anuncios
              </p>
            </div>

            <div className="relative z-10 border-t border-white/10 p-8 sm:p-12 lg:border-l lg:border-t-0">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-white/45">
                  Requisitos del sistema
                </span>
                <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] p-1">
                  {platforms.map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setPlatform(id)}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all duration-200",
                        platform === id
                          ? "bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                          : "text-white/45 hover:text-white/75"
                      )}
                    >
                      <Icon
                        className={cn("size-3.5", platform === id ? "text-neon" : "text-white/40")}
                        strokeWidth={1.8}
                      />
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <motion.ul
                key={platform}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="mt-6 flex flex-col gap-5"
              >
                {requirements[platform].map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3.5 text-sm text-white/80">
                    <span className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-neon/80">
                      <Icon className="size-4" strokeWidth={1.8} />
                    </span>
                    {label}
                  </li>
                ))}
              </motion.ul>
              <div className="mt-8 flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs text-soft">
                <ShieldCheck className="size-4 shrink-0 text-emerald-400" />
                Sin registro · Sin telemetría · Funciona 100 % offline
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}