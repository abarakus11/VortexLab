"use client";

import { useId } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    stars: 5,
    text: "O site ficou absurdamente bonito. Recebemos elogios de clientes, parceiros e até concorrentes. O retorno sobre o investimento foi imediato — as conversões dobraram no primeiro mês.",
    name: "Marcus Figueiredo",
    role: "CEO, Nexus Capital",
    initials: "MF",
  },
  {
    stars: 5,
    text: "Em 3 meses após o lançamento, nossas conversões aumentaram 340%. O design é nível Awwwards. Não existe nada parecido no mercado. A equipe entregou além do prometido.",
    name: "Patricia Borges",
    role: "Fundadora, Orion SaaS",
    initials: "PB",
  },
  {
    stars: 5,
    text: "Atendimento impecável, prazo cumprido e resultado acima do esperado. Sinto que tenho o site mais bonito do meu segmento. Todo mundo pergunta quem fez. Simplesmente sensacional.",
    name: "Rafael Nunes",
    role: "Diretor, Vertex Security",
    initials: "RN",
  },
];

function QuoteGlyph({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const gid = `qg-${uid}`;
  return (
    <svg
      className={className}
      viewBox="0 0 72 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8 32c0-12 8-20 20-24l4 8c-8 3-12 9-12 16h12v24H8V32zm36 0c0-12 8-20 20-24l4 8c-8 3-12 9-12 16h12v24H44V32z"
        fill={`url(#${gid})`}
        opacity="0.9"
      />
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="72" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7c3aed" />
          <stop offset="0.55" stopColor="#1e90ff" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="relative z-[1] px-6 py-24 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mb-14 text-center"
      >
        <div className="label-mono mb-3 text-[0.7rem] font-semibold uppercase text-violet-400">✦ Depoimentos</div>
        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold">O que nossos clientes dizem</h2>
      </motion.div>

      {/* Mosaico: colunas desalinhadas */}
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.04] p-7 backdrop-blur-sm md:col-span-7 md:mt-0"
        >
          <QuoteGlyph className="pointer-events-none absolute right-5 top-4 h-14 w-[4.5rem] opacity-90" />
          <div className="mb-4 text-amber-400 text-sm">{"★".repeat(testimonials[0].stars)}</div>
          <p className="relative z-[1] text-[0.9rem] leading-relaxed text-white/65">
            {"\u201C"}
            {testimonials[0].text}
            {"\u201D"}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-[#1e90ff] text-xs font-bold">
              {testimonials[0].initials}
            </div>
            <div>
              <div className="text-sm font-semibold">{testimonials[0].name}</div>
              <div className="text-xs text-zinc-500">{testimonials[0].role}</div>
            </div>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.04] p-7 backdrop-blur-sm md:col-span-5 md:row-span-2 md:translate-y-10"
        >
          <QuoteGlyph className="pointer-events-none absolute right-4 top-6 h-16 w-20 opacity-80" />
          <div className="mb-4 text-amber-400 text-sm">{"★".repeat(testimonials[1].stars)}</div>
          <p className="relative z-[1] text-[0.9rem] leading-relaxed text-white/65">
            {"\u201C"}
            {testimonials[1].text}
            {"\u201D"}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-[#1e90ff] text-xs font-bold">
              {testimonials[1].initials}
            </div>
            <div>
              <div className="text-sm font-semibold">{testimonials[1].name}</div>
              <div className="text-xs text-zinc-500">{testimonials[1].role}</div>
            </div>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.04] p-7 backdrop-blur-sm md:col-span-7 md:-mt-4"
        >
          <QuoteGlyph className="pointer-events-none absolute right-5 top-5 h-14 w-[4.5rem] opacity-75" />
          <div className="mb-4 text-amber-400 text-sm">{"★".repeat(testimonials[2].stars)}</div>
          <p className="relative z-[1] text-[0.9rem] leading-relaxed text-white/65">
            {"\u201C"}
            {testimonials[2].text}
            {"\u201D"}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-[#1e90ff] text-xs font-bold">
              {testimonials[2].initials}
            </div>
            <div>
              <div className="text-sm font-semibold">{testimonials[2].name}</div>
              <div className="text-xs text-zinc-500">{testimonials[2].role}</div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
