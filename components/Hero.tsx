"use client";

import { motion } from "framer-motion";
import { WHATSAPP_URL, DISCORD_URL } from "@/lib/constants";
import MockupFloating from "./MockupFloating";
import CustomButton from "./CustomButton";

const line1Words = "Transformamos ideias em".split(" ");

const headlineContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
};

const wordUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 280, damping: 26 },
  },
};

export default function Hero() {
  return (
    <section className="relative z-[1] flex min-h-screen flex-col items-center justify-center px-6 pb-16 pt-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="label-mono mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-[0.7rem] font-medium uppercase text-violet-300"
      >
        <span
          className="h-1.5 w-1.5 rounded-full bg-violet-400"
          style={{ animation: "pulseDot 2s infinite" }}
        />
        Experiências digitais de nível mundial
      </motion.div>

      <motion.h1
        className="mb-6 max-w-[920px] leading-[1.06] tracking-tight"
        variants={headlineContainer}
        initial="hidden"
        animate="visible"
      >
        <span className="hero-pen-line block text-[clamp(3.1rem,9.5vw,7.5rem)]">
          {line1Words.map((w, i) => (
            <motion.span key={`${w}-${i}`} variants={wordUp} className="mr-[0.2em] inline-block">
              {w}
            </motion.span>
          ))}
        </span>
        <motion.span
          variants={wordUp}
          className="hero-phrase-pulse mt-1 block font-display font-extrabold"
        >
          experiências impossíveis de ignorar.
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.35 }}
        className="mx-auto mb-10 max-w-[560px] text-base leading-relaxed text-white/50"
      >
        Criamos websites, landing pages e sistemas digitais que vendem, impressionam e convertem. Design
        cinematográfico. Performance absurda. Experiência premium.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.48 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <CustomButton href={WHATSAPP_URL} variant="primary" target="_blank" rel="noopener noreferrer">
          ✦ Solicitar Projeto
        </CustomButton>

        <CustomButton
          href={DISCORD_URL}
          variant="secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.span
            className="inline-flex h-6 w-6 items-center justify-center rounded border border-white/25 text-lg leading-none"
            whileHover={{ rotate: 90, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
          >
            +
          </motion.span>
          Entrar na Comunidade
        </CustomButton>
      </motion.div>

      <MockupFloating />
    </section>
  );
}
