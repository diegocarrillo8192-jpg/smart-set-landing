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
    iconName: "brain" as const,
    title: "Algoritmo de Transición Armónica",
    description:
      "Cada mezcla se construye con la coherencia de la rueda Camelot, garantizando transiciones armónicas en toda tu sesión.",
    tags: ["Rueda Camelot", "Tonalidades compatibles"],
  },
  {
    iconName: "timer" as const,
    title: "Estructuración por Duración y Peak Hours",
    description:
      "Secuencia tus tracks según la duración del set y la energía de cada momento, construyendo picos de forma intencional.",
    tags: ["Curvas de energía", "Picos programados"],
  },
  {
    iconName: "export" as const,
    title: "Exportación XML Nativa",
    description:
      "De Smart Set Architect a tus reproductores en un clic: playlists y estructura exportadas a los formatos nativos de cada software.",
    tags: ["Rekordbox XML", "Serato Crates"],
  },
  {
    iconName: "scan" as const,
    title: "Escaneo Local de Alta Velocidad",
    description:
      "Miles de pistas analizadas en segundos: BPM, clave y energía detectados de forma 100 % local, sin subir nada a la nube.",
    tags: ["BPM · Key", "100 % local"],
  },
];

export default function FeatureGrid({ id }: FeatureGridProps) {
  return (
    <section id={id} className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[380px] w-[640px] -translate-x-1/2 rounded-full bg-violet-600/[0.07] blur-[130px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Features pro"
          title="Todo lo que el análisis de tu biblioteca necesita"
          subtitle="Un motor pensado para DJs que exigen precisión en cada transición, sin renunciar a la velocidad."
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