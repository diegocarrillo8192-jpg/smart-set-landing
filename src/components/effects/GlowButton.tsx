"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type GlowButtonProps = {
  children: ReactNode;
  href: string;
  className?: string;
  innerClassName?: string;
  download?: boolean;
  onClick?: () => void;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "onClick" | "href">;

export default function GlowButton({
  children,
  href,
  className,
  innerClassName,
  download,
  onClick,
  ...rest
}: GlowButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      download={download}
      {...rest}
      className={cn("glow-border-animated group relative inline-flex rounded-full p-px", className)}
    >
      <span
        className={cn(
          "relative z-10 inline-flex items-center rounded-[inherit] transition-all duration-300",
          innerClassName
        )}
      >
        {children}
      </span>
    </a>
  );
}