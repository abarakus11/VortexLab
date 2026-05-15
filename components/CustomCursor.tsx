"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX - 6 + "px";
        cursorRef.current.style.top = e.clientY - 6 + "px";
      }
    };

    window.addEventListener("mousemove", handleMove);

    let rafId: number;
    const animate = () => {
      posRef.current.tx += (posRef.current.x - posRef.current.tx) * 0.12;
      posRef.current.ty += (posRef.current.y - posRef.current.ty) * 0.12;
      if (trailRef.current) {
        trailRef.current.style.left = posRef.current.tx - 16 + "px";
        trailRef.current.style.top = posRef.current.ty - 16 + "px";
      }
      rafId = requestAnimationFrame(animate);
    };
    animate();

    // Scale up on interactive elements
    const interactives = document.querySelectorAll("a, button, [role='button']");
    const scaleUp = () => {
      if (cursorRef.current) cursorRef.current.style.transform = "scale(2)";
      if (trailRef.current) trailRef.current.style.transform = "scale(1.5)";
    };
    const scaleDown = () => {
      if (cursorRef.current) cursorRef.current.style.transform = "scale(1)";
      if (trailRef.current) trailRef.current.style.transform = "scale(1)";
    };
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", scaleUp);
      el.addEventListener("mouseleave", scaleDown);
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          width: 12,
          height: 12,
          background: "#a855f7",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "transform 0.15s",
          boxShadow: "0 0 20px #a855f7, 0 0 40px rgba(168,85,247,0.4)",
          mixBlendMode: "screen",
        }}
      />
      <div
        ref={trailRef}
        style={{
          position: "fixed",
          width: 32,
          height: 32,
          border: "1px solid rgba(168,85,247,0.4)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          transition: "transform 0.15s",
          background: "rgba(124,58,237,0.03)",
        }}
      />
    </>
  );
}
