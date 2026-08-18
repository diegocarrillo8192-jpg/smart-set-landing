"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { EASE, staggerContainer } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  stagger?: number;
};

const buildVariants = (y: number): Variants => ({
  hidden: { opacity: 0, y },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: EASE },
  }),
});

export default function Reveal({ children, className, delay = 0, y = 15, stagger }: RevealProps) {
  if (stagger !== undefined) {
    return (
      <motion.div
        className={className}
        variants={staggerContainer(stagger, delay)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={buildVariants(y)}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}