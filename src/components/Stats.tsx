"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const stats = [
  { value: 2, suffix: "", label: "GATE Qualified", detail: "DA & CS (2026)" },
  { value: 7.81, suffix: "", label: "CGPA", detail: "B.Tech IT" },
  { value: 3, suffix: "+", label: "ML Projects", detail: "Deployed" },
  { value: 2000, suffix: "+", label: "Attendee Event", detail: "Led" },
  { value: 6, suffix: " Years", label: "Hindustani", detail: "Classical Training" },
  { value: 30, suffix: "+", label: "Design Assets", detail: "Created" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) {
      return;
    }

    let frame = 0;
    const totalFrames = 72;
    const animate = () => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      setDisplay(value * Math.min(progress, 1));

      if (frame < totalFrames) {
        requestAnimationFrame(animate);
      }
    };

    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [started, value]);

  const formatted = value % 1 === 0 ? Math.round(display).toLocaleString("en-IN") : display.toFixed(2);

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="relative z-20 border-y border-[color:var(--line)] bg-[var(--surface)] px-5 py-10 md:px-10">
      <div className="theme-grid-frame mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((stat, index) => (
          <Reveal
            key={`${stat.label}-${stat.detail}`}
            delay={index * 55}
            className="theme-surface px-4 py-7 md:px-5 md:py-8"
          >
            <p className="theme-heading font-heading text-3xl font-semibold md:text-4xl">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="theme-eyebrow mt-4 text-xs font-semibold uppercase">{stat.label}</p>
            <p className="theme-muted mt-1 text-sm">{stat.detail}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
