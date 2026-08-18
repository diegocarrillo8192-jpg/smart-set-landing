"use client";

import confetti from "canvas-confetti";

const COLORS = ["#22d3ee", "#a78bfa", "#e0f2fe", "#ffffff"];

export function fireDownloadConfetti() {
  const base = { colors: COLORS, ticks: 130, gravity: 0.9, decay: 0.93, startVelocity: 34 };

  confetti({ ...base, particleCount: 70, spread: 75, origin: { x: 0.5, y: 0.72 } });

  setTimeout(
    () => confetti({ ...base, particleCount: 45, angle: 60, spread: 55, origin: { x: 0.12, y: 0.9 } }),
    180
  );
  setTimeout(
    () => confetti({ ...base, particleCount: 45, angle: 120, spread: 55, origin: { x: 0.88, y: 0.9 } }),
    320
  );
}