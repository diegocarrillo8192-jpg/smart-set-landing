"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/features/FeatureCard";
import { staggerContainer } from "@/lib/motion";

type FeatureGridProps = {
  id?: string;
};

const features = [
  {
    iconName: "gauge" as const,
    title: "Hard Phase Lock a 0 ms",
    description:
      "El Motor Pro Audio bloquea la fase de cada pista con 0 ms de jitter: sincronización estática sin deriva, incluso en sesiones de horas.",
    tags: ["0 ms jitter", "Sync estático"],
  },
  {
    iconName: "sync" as const,
    title: "Sincronización 1:1 de precisión",
    description:
      "Grilla, BPM y posición de beat replicados con exactitud 1:1, al nivel de los estándares de la industria como Rekordbox y Traktor.",
    tags: ["Hard Lock 1:1", "Rekordbox · Traktor"],
  },
  {
    iconName: "loop" as const,
    title: "Auto Loops & Beat Jump cuantizados",
    description:
      "Loops automáticos y saltos de beat cuantizados a la grilla para transiciones limpias y ediciones en vivo sin un solo error de timing.",
    tags: ["Auto Loops", "Beat Jump"],
  },
  {
    iconName: "layout" as const,
    title: "Maquetado inteligente de sets",
    description:
      "Análisis armónico y curvas de energía que estructuran tu set completo, con exportación nativa a Rekordbox y Serato en un clic.",
    tags: ["Rekordbox XML", "Serato Crates"],
  },
];

export default function FeatureGrid({ id }: FeatureGridProps) {
  return (
    <section id={id} className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[380px] w-[640px] -translate-x-1/2 rounded-full bg-violet-600/[0.08] blur-[130px]" />
        <div className="absolute right-[8%] bottom-0 h-[300px] w-[480px] rounded-full bg-cyan-500/[0.06] blur-[130px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Motor Pro Audio"
          title="Ingeniería de precisión para tu set"
          subtitle="Fase bloqueada, grilla exacta y loops cuantizados: el motor detrás de sets que suenan perfectos de principio a fin."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
