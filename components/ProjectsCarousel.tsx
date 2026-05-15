"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useState } from "react";

export type PortfolioProject = {
  name: string;
  category: string;
  desc: string;
  tags: string[];
  bg: string;
  accent: string;
  label: string;
  labelColor: string;
  /** Se definido, o card inteiro abre o site em nova aba. */
  url?: string;
};

const projects: PortfolioProject[] = [
  {
    name: "Aurelius Steakhouse",
    category: "GASTRONOMIA PREMIUM",
    desc: "Site para restaurante fine dining com reservas online, cardápio interativo e experiência cinematográfica.",
    tags: ["Next.js", "Framer", "CMS"],
    bg: "linear-gradient(135deg,#1a0505,#2d0d0d)",
    accent: "#c0392b",
    label: "Aurelius\nSteakhouse",
    labelColor: "#c0392b",
  },
  {
    name: "Nexus FinTech",
    category: "FINTECH & SAAS",
    desc: "Plataforma financeira SaaS com dashboard interativo, gráficos em tempo real e onboarding premium.",
    tags: ["React", "Supabase", "D3.js"],
    bg: "linear-gradient(135deg,#050a1a,#0d1a3d)",
    accent: "#7c3aed",
    label: "Nexus\nFinTech",
    labelColor: "#a855f7",
  },
  {
    name: "NXGN Wear",
    category: "STREETWEAR & MODA",
    desc: "E-commerce de streetwear com lookbook interativo, filtros por estilo e experiência de compra premium.",
    tags: ["Shopify", "Custom Theme", "3D"],
    bg: "linear-gradient(135deg,#0a0a0a,#1a1a1a)",
    accent: "#ffffff",
    label: "NXGN\nWEAR",
    labelColor: "rgba(255,255,255,0.85)",
  },
  {
    name: "Vertex Cyber",
    category: "CIBERSEGURANÇA",
    desc: "Site institucional para empresa de segurança digital com visual hacker premium e geração de leads B2B.",
    tags: ["Next.js", "GSAP", "HubSpot"],
    bg: "linear-gradient(135deg,#001a0d,#003320)",
    accent: "#00ff7f",
    label: "Vertex\nCyber",
    labelColor: "#00ff7f",
  },
  {
    name: "Stack Burger",
    category: "FOOD & DELIVERY",
    desc: "Site para hamburgueria artesanal com cardápio visual, pedido online integrado e landing page de campanhas.",
    tags: ["Next.js", "iFood API", "PWA"],
    bg: "linear-gradient(135deg,#1a0800,#3d1a00)",
    accent: "#ff6b35",
    label: "Stack\nBurger",
    labelColor: "#ff6b35",
  },
  {
    name: "Orion AI SaaS",
    category: "INTELIGÊNCIA ARTIFICIAL",
    desc: "Landing page e app para plataforma de IA com demonstração interativa, pricing e área de usuário.",
    tags: ["Next.js", "Stripe", "Auth"],
    bg: "linear-gradient(135deg,#050515,#0a0a2a)",
    accent: "#a855f7",
    label: "Orion\nAI SaaS",
    labelColor: "#ec4899",
  },
  {
    name: "Pinoy Talisman Online",
    category: "MMORPG & JOGOS",
    desc: "Site oficial do MMORPG com download, notícias e patch notes, rankings de jogadores e guildas, classes e live hub da comunidade — visual dark fantasy inspirado no universo do jogo.",
    tags: ["Next.js", "React", "Portal"],
    bg: "linear-gradient(135deg,#0d0518,#1a0b2e 40%,#4a1530 75%,#6b1f18 100%)",
    accent: "#c9a227",
    label: "Pinoy\nTalisman",
    labelColor: "#fbbf24",
    url: "https://pinoy-to.com/",
  },
  {
    name: "Priston Tale Brasil",
    category: "MMORPG & JOGOS",
    desc: "MMORPG clássico de fantasia medieval no Brasil: evolução de personagens, PvP, caça a monstros, clãs e progressão intensa. Visual nostálgico, combate acelerado e comunidade fiel — exploração, guerras entre jogadores e grind contínuo em mundo persistente.",
    tags: ["Portal", "Ranking", "Comunidade"],
    bg: "linear-gradient(135deg,#0c1628,#152238 35%,#1e3a5f 70%,#0f2847 100%)",
    accent: "#cdb87d",
    label: "Priston\nTale",
    labelColor: "#e8d5a3",
    url: "https://zenit.games/priston/",
  },
];

const CARD_W = 280;

function CardContents({ project }: { project: PortfolioProject }) {
  return (
    <>
      <div
        className="flex h-[160px] origin-center flex-col justify-end bg-cover p-5 transition-transform duration-500 ease-out group-hover:scale-[0.96] sm:h-[170px]"
        style={{ background: project.bg }}
      >
        <div className="origin-bottom-left font-display text-[1.45rem] font-extrabold leading-snug text-white/90 [text-shadow:var(--neon-text-strong)] transition-transform duration-500 ease-out group-hover:scale-110 whitespace-pre-line sm:text-[1.55rem]">
          <span style={{ color: project.labelColor }}>{project.label}</span>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="label-mono mb-1.5 text-[0.62rem] font-semibold uppercase text-cyan-400/95 [text-shadow:var(--neon-text)]">
          {project.category}
        </div>
        <div className="font-display text-base font-bold [text-shadow:var(--neon-text)] sm:text-lg">{project.name}</div>
        <p className="mt-2 text-[0.78rem] leading-relaxed text-zinc-500 [text-shadow:var(--neon-text)] sm:text-[0.8rem]">
          {project.desc}
        </p>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {project.tags.map((tag, ti) => (
            <span
              key={`${project.name}-${tag}-${ti}`}
              className="rounded border border-violet-500/35 bg-violet-500/15 px-1.5 py-0.5 text-[0.58rem] tracking-wide text-violet-200 [text-shadow:0_0_8px_rgba(168,85,247,0.45)] sm:text-[0.6rem]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

/**
 * Billboard 3D: o pai gira com `rotation`; cada face usa rotateY(-slotAngle - rotation)
 * para permanecer sempre voltada à câmera (evita sumir por backface / costas).
 */
function CycloneCard({
  project,
  index,
  total,
  radius,
  rotation,
  angleOffsetDeg = 0,
  spiralPhase = 0,
  spiralAmp = 48,
}: {
  project: PortfolioProject;
  index: number;
  total: number;
  radius: number;
  rotation: MotionValue<number>;
  angleOffsetDeg?: number;
  spiralPhase?: number;
  spiralAmp?: number;
}) {
  const step = 360 / total;
  const angle = index * step + angleOffsetDeg;
  const spiralY = Math.sin((index / total) * Math.PI * 2 + spiralPhase) * spiralAmp;
  const faceRotateY = useTransform(rotation, (r) => -angle - r);

  return (
    <div
      className="pointer-events-auto absolute left-1/2 top-1/2 [transform-style:preserve-3d]"
      style={{
        transform: `translate(-50%, calc(-50% + ${spiralY}px)) rotateY(${angle}deg) translateZ(${radius}px)`,
      }}
    >
      <motion.div className="[transform-style:preserve-3d] will-change-transform" style={{ rotateY: faceRotateY }}>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir site: ${project.name}`}
            className="group block cursor-pointer overflow-hidden rounded-2xl border border-violet-500/35 bg-surface2/95 text-inherit no-underline shadow-[0_0_28px_rgba(124,58,237,0.25),0_0_48px_rgba(34,211,238,0.08)] backdrop-blur-sm outline-offset-4 transition-[box-shadow,border-color] duration-500 [transform:translateZ(0)] hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.45),0_0_64px_rgba(34,211,238,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400/80"
            style={{ width: CARD_W }}
          >
            <CardContents project={project} />
          </a>
        ) : (
          <div
            className="group overflow-hidden rounded-2xl border border-violet-500/35 bg-surface2/95 shadow-[0_0_28px_rgba(124,58,237,0.25),0_0_48px_rgba(34,211,238,0.08)] backdrop-blur-sm transition-[box-shadow,border-color] duration-500 [transform:translateZ(0)] hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.45),0_0_64px_rgba(34,211,238,0.15)]"
            style={{ width: CARD_W }}
          >
            <CardContents project={project} />
          </div>
        )}
      </motion.div>
    </div>
  );
}

const OUTER_RING = [...projects, ...projects, ...projects];

export default function ProjectsCarousel() {
  const reduceMotion = useReducedMotion();
  const [radius, setRadius] = useState(380);
  const rotation = useMotionValue(0);

  useEffect(() => {
    const upd = () => {
      const w = window.innerWidth;
      if (w < 480) setRadius(Math.min(210, w * 0.4));
      else if (w < 768) setRadius(275);
      else setRadius(390);
    };
    upd();
    window.addEventListener("resize", upd, { passive: true });
    return () => window.removeEventListener("resize", upd);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      rotation.set(0);
      return;
    }
    const durationMs = 48_000;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const elapsed = now - t0;
      rotation.set(((elapsed % durationMs) / durationMs) * 360);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduceMotion]);

  const nOuter = OUTER_RING.length;
  const nInner = projects.length;

  return (
    <section id="projetos" className="relative z-[1] overflow-hidden py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative z-[1] mb-10 px-6 text-center md:mb-14 md:px-10"
      >
        <div className="label-mono mb-3 text-[0.7rem] font-semibold uppercase text-violet-400">✦ Portfólio</div>
        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold [text-shadow:var(--neon-text-strong)]">
          Projetos que falam por si
        </h2>
        <p className="label-mono mt-3 max-w-xl px-4 text-[0.62rem] uppercase leading-relaxed text-zinc-500 [text-shadow:var(--neon-text)] md:mx-auto">
          Ciclone 3D — voltados para ti o tempo todo; nada some por virar de costas.
        </p>
      </motion.div>

      <div className="relative mx-auto flex min-h-[min(78vh,760px)] w-full max-w-[1600px] items-center justify-center px-4 [perspective:1400px] [perspective-origin:50%_48%] md:min-h-[min(82vh,860px)]">
        <div
          className="relative flex h-[min(68vh,640px)] w-full items-center justify-center [transform-style:preserve-3d]"
          style={{ transform: "rotateX(9deg)" }}
        >
          <div
            className="pointer-events-none absolute left-1/2 top-[46%] h-[min(48vw,380px)] w-[min(48vw,380px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.12)_0%,rgba(34,211,238,0.06)_35%,transparent_68%)] blur-md"
            aria-hidden
          />

          <motion.div
            className="pointer-events-none relative h-[200px] w-full [transform-style:preserve-3d] will-change-transform md:h-[240px]"
            style={{ rotateY: rotation, transformOrigin: "center center" }}
          >
            {OUTER_RING.map((project, i) => (
              <CycloneCard
                key={`outer-${i}-${project.name}`}
                project={project}
                index={i}
                total={nOuter}
                radius={radius}
                rotation={rotation}
                spiralAmp={46}
              />
            ))}
            {projects.map((project, i) => (
              <CycloneCard
                key={`inner-${i}-${project.name}`}
                project={project}
                index={i}
                total={nInner}
                radius={radius * 0.54}
                rotation={rotation}
                angleOffsetDeg={30}
                spiralPhase={1.1}
                spiralAmp={34}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-[28%] left-0 z-[2] w-16 bg-gradient-to-r from-[#020206] to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-[28%] right-0 z-[2] w-16 bg-gradient-to-l from-[#020206] to-transparent md:w-24" />
    </section>
  );
}
