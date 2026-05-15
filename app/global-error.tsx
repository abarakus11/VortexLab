"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          background: "#020206",
          color: "#f8f8ff",
          padding: 24,
          minHeight: "100vh",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <h1 style={{ fontSize: "1.25rem", marginBottom: 12 }}>Erro crítico</h1>
        <pre
          style={{
            color: "#f87171",
            fontSize: 14,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            marginBottom: 16,
          }}
        >
          {error.message}
        </pre>
        <button
          type="button"
          onClick={() => reset()}
          style={{
            padding: "10px 18px",
            borderRadius: 8,
            border: "1px solid rgba(168,85,247,0.5)",
            background: "rgba(124,58,237,0.25)",
            color: "#f8f8ff",
            cursor: "pointer",
          }}
        >
          Recarregar
        </button>
      </body>
    </html>
  );
}
