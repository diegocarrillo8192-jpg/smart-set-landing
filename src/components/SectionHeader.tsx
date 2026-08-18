"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
};

export default function SectionHeader({ eyebrow, title, subtitle, className }: SectionHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0.05)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn("mx-auto max-w-2xl text-center", className)}
    >
      <motion.span
        variants={fadeUp}
        className="font-mono text-xs uppercase tracking-[0.22em] text-neon"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className="mt-4 text-3xl font-semibold tracking-tight text-white text-balance sm:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle !== undefined && (
        <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-soft sm:text-lg">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}