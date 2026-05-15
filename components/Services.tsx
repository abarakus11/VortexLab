"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "🌐",
    title: "Websites Premium",
    desc: "Sites institucionais e corporativos com design exclusivo, animações cinematográficas e performance de elite.",
    tag: "→ Next.js + Framer Motion",
  },
  {
    icon: "🚀",
    title: "Landing Pages",
    desc: "Páginas altamente otimizadas para conversão, com copy persuasivo e UX que guia o visitante à ação.",
    tag: "→ Conversão maximizada",
  },
  {
    icon: "⚙️",
    title: "Sistemas Web",
    desc: "Dashboards, plataformas SaaS e sistemas internos com arquitetura escalável e interfaces intuitivas.",
    tag: "→ Full-stack moderno",
  },
  {
    icon: "🛒",
    title: "E-commerce",
    desc: "Lojas online com experiência de compra premium, checkout otimizado e integrações de pagamento.",
    tag: "→ Shopify / Custom",
  },
  {
    icon: "🤖",
    title: "Automação",
    desc: "Workflows automatizados, integrações via API e agentes de IA para escalar seu negócio sem esforço.",
    tag: "→ n8n + AI agents",
  },
  {
    icon: "✦",
    title: "Branding Digital",
    desc: "Identidade visual completa, guia de marca, motion design e presença digital coesa e profissional.",
    tag: "→ Marca de impacto",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Interfaces que encantam e convertem. Design system, prototipagem e testes de usabilidade.",
    tag: "→ Figma + Prototype",
  },
  {
    icon: "📈",
    title: "Performance & SEO",
    desc: "Otimização técnica completa, Core Web Vitals perfeitos e estratégia de SEO para dominar o Google.",
    tag: "→ Rank #1 no Google",
  },
];

function ServiceCard({
  svc,
  index,
}: {
  svc: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [9, -9]), { stiffness: 280, damping: 28 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 280, damping: 28 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      style={{ perspective: 1100 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full rounded-xl border border-violet-500/15 bg-white/[0.06] p-7 shadow-none backdrop-blur-md transition-[box-shadow,border-color] duration-500 group-hover:border-[#39FF14]/55 group-hover:shadow-[0_0_0_1px_rgba(57,255,20,0.35),0_0_32px_rgba(57,255,20,0.12)]"
      >
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-violet-500/35 bg-gradient-to-br from-violet-500/25 to-[#1e90ff]/20 text-xl">
          {svc.icon}
        </div>
        <h3 className="mb-2 text-base font-semibold">{svc.title}</h3>
        <p className="text-[0.82rem] leading-relaxed text-zinc-500">{svc.desc}</p>
        <div className="label-mono mt-4 inline-block text-[0.65rem] font-medium uppercase text-violet-400/90">
          {svc.tag}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative z-[1] px-6 py-24 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        className="mb-16 text-center"
      >
        <div className="label-mono mb-4 text-[0.7rem] font-semibold uppercase text-violet-400">✦ O que fazemos</div>
        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-tight">
          Serviços que transformam
          <br />
          o seu negócio digital
        </h2>
        <p className="mx-auto mt-4 max-w-[500px] text-[0.95rem] leading-relaxed text-white/45">
          Cada projeto é tratado como uma obra de arte digital. Nada genérico. Tudo sob medida.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((svc, i) => (
          <ServiceCard key={svc.title} svc={svc} index={i} />
        ))}
      </div>
    </section>
  );
}
