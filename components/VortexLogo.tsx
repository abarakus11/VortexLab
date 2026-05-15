"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

const letters = ["V", "O", "R", "T", "E", "X"];

type Size = "nav" | "footer";

export default function VortexLogo({
  size = "nav",
  className,
}: {
  size?: Size;
  className?: string;
}) {
  const isFooter = size === "footer";

  return (
    <motion.a
      href="#"
      className={clsx(
        "group inline-flex select-none items-center gap-0 font-display font-extrabold tracking-[0.12em] no-underline neon-clip-text",
        isFooter ? "text-[2.8rem] leading-none" : "text-[1.4rem] leading-none",
        className
      )}
      whileHover="hover"
      initial="idle"
    >
      {letters.map((L, i) => (
        <motion.span
          key={`${L}-${i}`}
          className="inline-block bg-gradient-to-br from-[#a855f7] via-[#1e90ff] to-[#22d3ee] bg-clip-text text-transparent"
          variants={{
            idle: { x: 0, y: 0, rotate: 0, filter: "blur(0px)" },
            hover: {
              x: [0, i % 2 ? 2 : -2, 0, i % 2 ? -1 : 1, 0],
              y: [0, -1, 1, 0],
              rotate: [0, i % 2 ? 2 : -2, 0],
              filter: ["blur(0px)", "blur(0.5px)", "blur(0px)"],
              transition: {
                duration: 0.35,
                repeat: 1,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            },
          }}
        >
          {L}
        </motion.span>
      ))}
    </motion.a>
  );
}
