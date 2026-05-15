"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Quanto tempo leva para criar meu site?",
    a: "O prazo depende da complexidade do projeto. Landing pages ficam prontas em 7 a 14 dias. Websites completos entre 3 a 6 semanas. Sistemas e plataformas têm prazo definido após briefing detalhado.",
  },
  {
    q: "Vocês entregam o código-fonte?",
    a: "Sim. Todo o código-fonte é entregue junto com documentação técnica, deploy em produção e treinamento para gestão do conteúdo. Você é dono do seu projeto — sem dependência.",
  },
  {
    q: "O site ficará bem no mobile?",
    a: "100% responsivo por padrão. Testamos em todos os dispositivos e tamanhos de tela. O mobile não é uma adaptação — é tratado como plataforma prioritária desde o início do design.",
  },
  {
    q: "Vocês oferecem suporte após o lançamento?",
    a: "Sim. Oferecemos planos de manutenção mensal, suporte técnico prioritário e atualizações de conteúdo. Você nunca fica sozinho depois da entrega.",
  },
  {
    q: "Qual é o investimento mínimo?",
    a: "Cada projeto é orçado individualmente conforme escopo e complexidade. Entre em contato via WhatsApp para receber uma proposta personalizada sem compromisso.",
  },
  {
    q: "Vocês trabalham com clientes de fora do Brasil?",
    a: "Sim! Trabalhamos com clientes no Brasil e internacionalmente. Aceitamos pagamentos em BRL, USD e EUR. Atendimento em português e inglês.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative z-[1] mx-auto max-w-[720px] px-6 py-24 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mb-12 text-center"
      >
        <div className="label-mono mb-3 text-[0.7rem] font-semibold uppercase text-violet-400">
          ✦ Perguntas Frequentes
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold">Dúvidas? A gente responde.</h2>
      </motion.div>

      <div>
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border-b border-white/[0.06]"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left font-sans text-[0.95rem] font-medium transition-colors duration-300"
                style={{ color: isOpen ? "#c4b5fd" : "#f8f8ff" }}
              >
                <span>{faq.q}</span>
                <motion.span
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-violet-500/35 text-xl font-light text-violet-300"
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-[0.875rem] leading-relaxed text-zinc-500">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
