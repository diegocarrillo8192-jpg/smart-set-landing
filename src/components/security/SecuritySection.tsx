"use client";

import { motion } from "framer-motion";
import { BadgeCheck, FileCheck, Lock, ShieldCheck, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/cn";
import BorderBeam from "@/components/effects/BorderBeam";
import GlowButton from "@/components/effects/GlowButton";

type SecuritySectionProps = {
  id?: string;
};

const points = [
  {
    icon: ShieldCheck,
    title: "Protección de datos",
    description: "Tu biblioteca nunca sale de tu equipo: todo el análisis se ejecuta 100 % local.",
    accent: "border-cyan-300/25 from-cyan-400/15 to-violet-500/15 text-cyan-300",
  },
  {
    icon: Lock,
    title: "Cifrado de extremo a extremo",
    description: "Metadatos y credenciales protegidos con cifrado AES-256 en reposo.",
    accent: "border-violet-300/25 from-violet-400/15 to-cyan-400/15 text-neon-violet",
  },
  {
    icon: BadgeCheck,
    title: "Integridad verificada",
    description: "Cada instalación y actualización valida firmas SHA-256 oficiales.",
    accent: "border-cyan-300/25 from-cyan-400/15 to-violet-500/15 text-cyan-300",
  },
  {
    icon: FileCheck,
    title: "Auditoría transparente",
    description: "Registro de eventos detallado y reporte de seguridad bajo solicitud.",
    accent: "border-violet-300/25 from-violet-400/15 to-cyan-400/15 text-neon-violet",
  },
];

export default function SecuritySection({ id }: SecuritySectionProps) {
  return (
    <section id={id} className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/3 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-violet-500/[0.08] blur-[140px]" />
        <div className="absolute right-1/4 top-2/3 h-[380px] w-[580px] translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Seguridad"
          title="Tu biblioteca, bajo tu control"
          subtitle="Cuatro capas de protección pensadas para DJs profesionales que no pueden permitirse perder su colección."
        />

        <Reveal stagger={0.12} className="mt-14">
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-cyan-300/25 hover:shadow-[0_50px_100px_-50px_rgba(0,0,0,0.95),0_0_90px_-35px_rgba(103,232,249,0.35)]"
          >
            <BorderBeam duration={9} className="opacity-0 group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            <div className="pointer-events-none absolute -top-28 right-1/4 z-0 h-64 w-96 rounded-full bg-cyan-500/10 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-28 left-1/4 z-0 h-64 w-96 rounded-full bg-violet-500/10 blur-[100px]" />

            <div className="relative z-10 p-8 sm:p-12">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-white/45">
                Smart Set Architect · Seguridad
              </span>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {points.map(({ icon: Icon, title, description, accent }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-white/20"
                  >
                    <span
                      className={cn(
                        "inline-flex size-10 items-center justify-center rounded-xl border bg-gradient-to-br",
                        accent
                      )}
                    >
                      <Icon className="size-5" strokeWidth={1.7} />
                    </span>
                    <h3 className="mt-4 text-sm font-semibold tracking-tight text-white">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-soft">{description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-center">
                <GlowButton
                  href="https://github.com/diegocarrillo8192-jpg/smart-set-studio/releases/download/v1.0.0/Smart-Set-Architect-Setup.exe"
                  className="rounded-xl [--glow-duration:3.5s]"
                  innerClassName="btn-shine gap-2.5 bg-[#0d1119] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white shadow-[0_0_50px_-12px_rgba(34,211,238,0.5)] hover:shadow-[0_0_64px_-10px_rgba(34,211,238,0.75)]"
                >
                  <ShieldCheck className="size-4.5 text-neon" />
                  Solicitar reporte de seguridad detallado
                </GlowButton>
                <GlowButton
                  href="https://smart-set-studio-e6cf.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl [--glow-duration:3.5s]"
                  innerClassName="btn-shine gap-2.5 bg-[#0d1119] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white shadow-[0_0_50px_-12px_rgba(56,189,248,0.5)] hover:shadow-[0_0_64px_-10px_rgba(56,189,248,0.75)]"
                >
                  <Sparkles className="size-4.5 text-sky-300" />
                  Probar interacción con seguridad
                </GlowButton>
              </div>

              <p className="mt-6 text-center font-mono text-[11px] text-white/40">
                Reporte en PDF bajo solicitud · Sin registro · Sin telemetría · 100 % offline
              </p>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}