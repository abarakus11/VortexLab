"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";

function Counter({
  target,
  suffix,
  onComplete,
}: {
  target: number;
  suffix: string;
  onComplete?: () => void;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const done = useRef(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 720;
          const steps = 45;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + increment, target);
            setCount(Math.round(current));
            if (current >= target) {
              clearInterval(timer);
              if (!done.current) {
                done.current = true;
                onCompleteRef.current?.();
              }
            }
          }, duration / steps);
        }
      },
      { threshold: 0.45 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const [labelsPhase, setLabelsPhase] = useState<"hidden" | "show">("hidden");
  const completed = useRef(0);

  const bump = useCallback(() => {
    completed.current += 1;
    if (completed.current >= STATS.length) {
      setLabelsPhase("show");
    }
  }, []);

  return (
    <section className="relative z-[1] border-y border-violet-500/10 bg-gradient-to-br from-violet-500/[0.05] to-cyan-500/[0.02] px-6 py-20">
      <div className="mx-auto grid max-w-[900px] grid-cols-2 gap-10 text-center md:grid-cols-4 md:gap-8">
        {STATS.map((stat, i) => (
          <div key={i}>
            <div className="neon-clip-text font-display text-[clamp(2.2rem,5vw,3rem)] font-extrabold bg-gradient-to-br from-violet-400 via-[#1e90ff] to-cyan-400 bg-clip-text text-transparent">
              <Counter target={stat.value} suffix={stat.suffix} onComplete={bump} />
            </div>
            <motion.div
              className="label-mono mt-2 text-[0.68rem] font-medium uppercase text-zinc-500"
              initial={{ opacity: 0, y: 10 }}
              animate={labelsPhase === "show" ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{
                duration: 0.45,
                delay: labelsPhase === "show" ? i * 0.08 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {stat.label}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
