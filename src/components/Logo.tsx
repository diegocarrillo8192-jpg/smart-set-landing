import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <a href="#top" className={cn("group inline-flex items-center gap-2.5", className)}>
      <span className="relative overflow-hidden rounded-lg shadow-[0_0_24px_-6px_rgba(139,92,246,0.7)] transition-shadow duration-300 group-hover:shadow-[0_0_30px_-4px_rgba(139,92,246,0.9)]">
        <Image
          src="/logo.png"
          alt="Smart Set Architect"
          width={1024}
          height={1024}
          className="size-8 object-cover"
        />
      </span>
      <span className="text-[15px] font-semibold tracking-tight text-white">
        Smart Set <span className="text-gradient font-semibold">Architect</span>
      </span>
    </a>
  );
}