"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/constants";
import VortexLogo from "./VortexLogo";
import CustomButton from "./CustomButton";

const navLinks = [
  { label: "Serviços", href: "#services" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-[100] flex items-center justify-between border-b border-violet-500/15 px-6 py-4 backdrop-blur-xl transition-colors duration-500 md:px-10"
      style={{
        background: scrolled ? "rgba(2,2,6,0.88)" : "rgba(2,2,6,0.45)",
      }}
    >
      <VortexLogo size="nav" />

      <ul className="hidden list-none gap-10 md:flex">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="nav-underline text-sm font-medium tracking-wide">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <motion.a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-instagram-brand btn-shimmer-instagram inline-flex items-center justify-center gap-2 rounded-md px-3 py-2.5 text-sm font-semibold tracking-wide text-white no-underline shadow-[0_0_22px_rgba(225,39,107,0.45),0_0_40px_rgba(121,56,185,0.3)] sm:px-4"
          aria-label="VORTEX no Instagram"
          whileHover={{
            y: -1,
            scale: 1.02,
            boxShadow: "0 0 32px rgba(236, 72, 153, 0.55), 0 0 56px rgba(147, 51, 234, 0.35)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 420, damping: 20 }}
        >
          <Instagram className="h-[1.05rem] w-[1.05rem] shrink-0 drop-shadow-sm sm:h-[1.1rem] sm:w-[1.1rem]" aria-hidden />
          <span className="hidden sm:inline drop-shadow-sm">Instagram</span>
        </motion.a>

        <CustomButton href={WHATSAPP_URL} variant="whatsapp" target="_blank" rel="noopener noreferrer">
          Falar no WhatsApp ↗
        </CustomButton>
      </div>
    </nav>
  );
}
