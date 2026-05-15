"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      style={{
        padding: 24,
        background: "#020206",
        color: "#f8f8ff",
        minHeight: "100vh",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "1.25rem", marginBottom: 12 }}>Erro ao carregar a página</h1>
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
        Tentar novamente
      </button>
    </div>
  );
}
