import { cn } from "@/lib/cn";

type BorderBeamProps = {
  className?: string;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
};

export default function BorderBeam({
  className,
  duration = 8,
  colorFrom = "#22d3ee",
  colorTo = "#a78bfa",
}: BorderBeamProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-500",
        className
      )}
      style={{ padding: 1 }}
    >
      <div className="absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
        <div className="h-full w-full animate-spin" style={{ animationDuration: `${duration}s` }}>
          <div
            className="h-full w-full"
            style={{
              background: `conic-gradient(from 0deg, transparent 0deg, ${colorFrom} 45deg, transparent 110deg, transparent 190deg, ${colorTo} 245deg, transparent 320deg, transparent 360deg)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}