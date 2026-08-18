"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/cn";

type TiltProps = {
  children: ReactNode;
  className?: string;
  max?: number;
};

export default function Tilt({ children, className, max = 4 }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), {
    stiffness: 140,
    damping: 18,
    mass: 0.6,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), {
    stiffness: 140,
    damping: 18,
    mass: 0.6,
  });

  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn("[perspective:1200px]", className)}
    >
      {children}
    </motion.div>
  );
}