"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: 2,
        width: `${progress}%`,
        background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
        zIndex: 200,
        transition: "width 0.1s linear",
        boxShadow: "0 0 8px #a855f7",
      }}
    />
  );
}
