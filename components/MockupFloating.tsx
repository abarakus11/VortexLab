"use client";

import { motion } from "framer-motion";

function BrowserFrame({
  url,
  children,
  style,
}: {
  url: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        background: "#131325",
        border: "1px solid rgba(124,58,237,0.2)",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,58,237,0.1)",
        ...style,
      }}
    >
      {/* Browser bar */}
      <div
        style={{
          background: "#0d0d1a",
          padding: "0.5rem 0.8rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840" }} />
        <div
          style={{
            flex: 1,
            background: "rgba(255,255,255,0.05)",
            borderRadius: 4,
            padding: "0.2rem 0.6rem",
            fontSize: "0.65rem",
            color: "#6b7280",
          }}
        >
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}

export default function MockupFloating() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      style={{
        marginTop: "4rem",
        width: "100%",
        maxWidth: 900,
        position: "relative",
        height: 300,
      }}
    >
      {/* Left mockup */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: "28%",
          left: 0,
          top: 40,
          opacity: 0.7,
          rotate: -1,
        }}
      >
        <BrowserFrame url="aurelius-steak.com">
          <div
            style={{
              background: "linear-gradient(160deg,#1a0505,#2d0d0d)",
              padding: "1.2rem",
              minHeight: 100,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "1.3rem",
                fontWeight: 800,
                color: "rgba(255,255,255,0.9)",
                lineHeight: 1.1,
              }}
            >
              Aurelius<br />
              <span style={{ color: "#c0392b" }}>Steakhouse</span>
            </div>
            <div
              style={{
                marginTop: 10,
                height: 6,
                background: "rgba(192,57,43,0.3)",
                borderRadius: 3,
                width: "70%",
              }}
            />
            <div
              style={{
                marginTop: 6,
                height: 6,
                background: "rgba(255,255,255,0.06)",
                borderRadius: 3,
                width: "50%",
              }}
            />
          </div>
        </BrowserFrame>
      </motion.div>

      {/* Main mockup */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", width: "64%", left: "18%", top: 0 }}
      >
        <BrowserFrame url="nexus-fintech.io">
          <div
            style={{
              background: "linear-gradient(160deg,#020212,#080820)",
              padding: "1.2rem",
              minHeight: 140,
            }}
          >
            <div
              style={{
                height: 10,
                background: "linear-gradient(90deg,#7c3aed,#2563eb)",
                borderRadius: 5,
                width: "55%",
                marginBottom: 10,
              }}
            />
            <div
              style={{
                height: 5,
                background: "rgba(255,255,255,0.1)",
                borderRadius: 3,
                width: "80%",
                marginBottom: 6,
              }}
            />
            <div
              style={{
                height: 5,
                background: "rgba(255,255,255,0.06)",
                borderRadius: 3,
                width: "60%",
                marginBottom: 16,
              }}
            />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
              {[
                { bg: "rgba(124,58,237,0.12)", border: "rgba(124,58,237,0.25)", color: "rgba(168,85,247,0.6)" },
                { bg: "rgba(37,99,235,0.12)", border: "rgba(37,99,235,0.25)", color: "rgba(59,130,246,0.6)" },
                { bg: "rgba(6,182,212,0.12)", border: "rgba(6,182,212,0.25)", color: "rgba(6,182,212,0.6)" },
              ].map((c, i) => (
                <div
                  key={i}
                  style={{
                    background: c.bg,
                    border: `1px solid ${c.border}`,
                    borderRadius: 8,
                    padding: 8,
                  }}
                >
                  <div
                    style={{ height: 4, background: c.color, borderRadius: 2, width: "60%", marginBottom: 4 }}
                  />
                  <div
                    style={{ height: 8, background: c.color, borderRadius: 2, width: "80%" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </BrowserFrame>
      </motion.div>

      {/* Right mockup */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: "28%",
          right: 0,
          top: 60,
          opacity: 0.7,
          rotate: 1,
        }}
      >
        <BrowserFrame url="nxgn-wear.store">
          <div
            style={{
              background: "linear-gradient(160deg,#0a0a12,#12121f)",
              padding: "1.2rem",
              minHeight: 100,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "1.3rem",
                fontWeight: 800,
                color: "rgba(255,255,255,0.9)",
                lineHeight: 1.1,
              }}
            >
              NXGN<br />
              <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>WEAR</span>
            </div>
            <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
              {[0.05, 0.05, 0.12].map((op, i) => (
                <div
                  key={i}
                  style={{
                    height: 28,
                    width: 28,
                    background: `rgba(255,255,255,${op})`,
                    border: i === 2 ? "1px solid rgba(255,255,255,0.25)" : "none",
                    borderRadius: 4,
                  }}
                />
              ))}
            </div>
          </div>
        </BrowserFrame>
      </motion.div>
    </motion.div>
  );
}
