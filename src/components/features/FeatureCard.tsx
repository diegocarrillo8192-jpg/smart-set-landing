"use client";

import { useRef, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Timer, FileOutput, ScanLine, type LucideIcon } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/cn";
import BorderBeam from "@/components/effects/BorderBeam";

const icons: Record<string, LucideIcon> = {
  brain: BrainCircuit,
  timer: Timer,
  export: FileOutput,
  scan: ScanLine,
};

type FeatureCardProps = {
  iconName: keyof typeof icons;
  title: string;
  description: string;
  tags: string[];
};

export default function FeatureCard({ iconName, title, description, tags }: FeatureCardProps) {
  const Icon = icons[iconName];
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      variants={fadeUp}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-800/50 bg-surface/60 p-6 backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:border-cyan-300/25 hover:shadow-[0_24px_70px_-28px_rgba(0,0,0,0.85),0_0_60px_-20px_rgba(103,232,249,0.28)]"
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 transition-opacity duration-500",
          visible ? "opacity-100" : "opacity-0"
        )}
        style={{
          background: `radial-gradient(260px circle at ${position.x}px ${position.y}px, rgba(103,232,249,0.09), transparent 65%)`,
        }}
      />
      <BorderBeam duration={7} className="opacity-0 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        <div className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-cyan-400/15 to-violet-500/15 text-neon transition-transform duration-300 group-hover:scale-105 group-hover:text-cyan-300 group-hover:shadow-[0_0_30px_-8px_rgba(103,232,249,0.5)]">
          <Icon className="size-5" strokeWidth={1.8} />
        </div>
        <h3 className="mt-5 text-[17px] font-medium tracking-tight text-white">{title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-soft">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-white/55"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}