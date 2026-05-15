"use client";

import { motion } from "framer-motion";

const reasons = [
  { icon: "🎬", title: "Design Cinematográfico", desc: "Visual que para qualquer feed e faz o visitante ficar. Cada pixel intencional." },
  { icon: "⚡", title: "Performance Absurda", desc: "Lighthouse 95+ garantido. Core Web Vitals no verde. Carregamento em menos de 2 segundos." },
  { icon: "📱", title: "Mobile Perfeito", desc: "O mobile não é uma adaptação — é tratado como plataforma prioritária desde o início." },
  { icon: "🔍", title: "SEO de Verdade", desc: "Estrutura técnica impecável, schema markup, sitemap e estratégia de conteúdo para ranquear." },
  { icon: "💰", title: "Conversão Elevada", desc: "UX orientado a resultados. Cada botão, cada headline e cada CTA estrategicamente posicionado." },
  { icon: "🛡️", title: "Código Limpo e Escalável", desc: "Arquitetura profissional, documentação completa e código que você vai conseguir manter." },
];

export default function WhyUs() {
  return (
    <section
      id="sobre"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "6rem 2rem",
        background: "linear-gradient(180deg,transparent,rgba(124,58,237,0.03),transparent)",
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "4rem" }}
      >
        <div
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            color: "#a855f7",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          ✦ Por que nos escolher
        </div>
        <h2
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(2rem,4vw,3.2rem)",
            fontWeight: 800,
            lineHeight: 1.1,
          }}
        >
          Não somos uma agência comum.
          <br />
          <span className="gradient-text">Somos o diferencial.</span>
        </h2>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "1.5rem",
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            style={{
              display: "flex",
              gap: "1rem",
              padding: "1.5rem",
              background: "rgba(13,13,26,0.5)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: 12,
              transition: "border-color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "rgba(124,58,237,0.25)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)")
            }
          >
            <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{r.icon}</div>
            <div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: "0.4rem" }}>
                {r.title}
              </h3>
              <p style={{ fontSize: "0.82rem", color: "#6b7280", lineHeight: 1.6 }}>
                {r.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
