"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "whatsapp";

type CustomButtonProps = Omit<HTMLMotionProps<"a">, "href"> & {
  href: string;
  variant: Variant;
  target?: string;
  rel?: string;
};

/**
 * Botões reutilizáveis com micro-interações e estados de hover definidos.
 */
export default function CustomButton({
  href,
  variant,
  className,
  children,
  target,
  rel,
  ...rest
}: CustomButtonProps) {
  if (variant === "primary") {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={clsx(
          "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg px-8 py-3.5 font-semibold tracking-wide text-white no-underline",
          "bg-gradient-to-br from-[#5b21b6] via-[#7c3aed] to-[#2563eb]",
          "shadow-[0_0_36px_rgba(124,58,237,0.55)]",
          className
        )}
        whileHover={{
          y: -2,
          boxShadow: "0 0 48px rgba(124,58,237,0.85), 0 0 80px rgba(30,144,255,0.35)",
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        {...rest}
      >
        {children}
      </motion.a>
    );
  }

  if (variant === "secondary") {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={clsx(
          "inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-transparent px-8 py-3.5 font-medium tracking-wide text-[#f8f8ff] no-underline",
          "transition-colors duration-300",
          className
        )}
        whileHover={{
          backgroundColor: "#1a2332",
          borderColor: "rgba(248,248,255,0.25)",
          color: "#ffffff",
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 380, damping: 26 }}
        {...rest}
      >
        {children}
      </motion.a>
    );
  }

  /* whatsapp / nav CTA — verde oficial + shimmer + neon */
  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      className={clsx(
        "btn-shimmer btn-whatsapp-brand relative inline-flex items-center justify-center overflow-hidden rounded-md px-5 py-2.5 text-sm font-semibold tracking-wide text-white no-underline",
        "shadow-[0_0_26px_rgba(37,211,102,0.5),0_0_48px_rgba(18,140,126,0.35)]",
        className
      )}
      whileHover={{
        y: -1,
        scale: 1.02,
        boxShadow: "0 0 36px rgba(37,211,102,0.75), 0 0 64px rgba(37,211,102,0.4)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 20 }}
      {...rest}
    >
      {children}
    </motion.a>
  );
}
