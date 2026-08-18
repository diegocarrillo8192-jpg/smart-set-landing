"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type SpotlightProps = {
  id?: string;
  className?: string;
  fill?: string;
};

export default function Spotlight({ id = "spotlight", className, fill = "#22d3ee" }: SpotlightProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.35, 0.7, 0.35] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className={cn("pointer-events-none absolute h-[440px] w-[720px] -z-10", className)}
    >
      <svg viewBox="0 0 878 791" aria-hidden="true" className="h-full w-full">
        <defs>
          <filter id={id} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="80" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.18 0"
              result="white"
            />
            <feBlend in="SourceGraphic" in2="white" mode="normal" />
          </filter>
        </defs>
        <g filter={`url(#${id})`} fill={fill}>
          <ellipse cx="120" cy="20" rx="100" ry="50" transform="rotate(0 120 20)" />
          <ellipse cx="560" cy="150" rx="120" ry="55" transform="rotate(28 560 150)" />
          <ellipse cx="360" cy="70" rx="110" ry="48" transform="rotate(12 360 70)" />
        </g>
      </svg>
    </motion.div>
  );
}