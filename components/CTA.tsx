"use client";

import { motion } from "framer-motion";
import { WHATSAPP_URL, DISCORD_URL } from "@/lib/constants";
import CustomButton from "./CustomButton";

export default function CTA() {
  return (
    <section className="relative z-[1] overflow-hidden px-6 py-28 text-center md:px-10">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vw,640px)] w-[min(90vw,640px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(45,27,107,0.45)_0%,rgba(30,144,255,0.12)_40%,transparent_68%)]" />

      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="relative"
      >
        <div className="label-mono mb-4 text-[0.7rem] font-semibold uppercase text-violet-400">✦ Pronto para começar?</div>

        <motion.h2
          className="font-display mx-auto mb-6 max-w-[1000px] font-extrabold leading-[1.06] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <span className="block text-[clamp(2.4rem,6.5vw,4.75rem)] text-white">
            Seu próximo site vai
            <br />
            <motion.span
              className="gradient-text inline-block"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 0.55, type: "spring", stiffness: 120, damping: 18 }}
            >
              mudar tudo.
            </motion.span>
          </span>
        </motion.h2>

        <p className="label-mono mx-auto mb-3 max-w-[560px] text-[0.72rem] font-medium uppercase tracking-[0.2em] text-white/35">
          Experiência premium · performance · conversão
        </p>
        <p className="mx-auto mb-10 max-w-[520px] text-base leading-relaxed text-white/45">
          Vamos transformar sua visão em uma experiência digital impossível de ignorar. Fale com a gente agora e receba
          uma proposta personalizada.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <CustomButton href={WHATSAPP_URL} variant="primary" target="_blank" rel="noopener noreferrer">
            💬 Solicitar Projeto no WhatsApp
          </CustomButton>
          <CustomButton
            href={DISCORD_URL}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            ⬡ Comunidade Discord
          </CustomButton>
        </div>
      </motion.div>
    </section>
  );
}
