import { WHATSAPP_URL, AGENCY_NAME } from "@/lib/constants";
import VortexLogo from "./VortexLogo";

export default function Footer() {
  return (
    <footer className="relative z-[1] flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.06] px-6 py-12 md:px-10">
      <VortexLogo size="footer" />

      <div className="text-sm text-zinc-500">
        © {new Date().getFullYear()} {AGENCY_NAME} Digital. Criamos o impossível.
      </div>

      <div className="flex gap-6">
        {[
          { label: "Privacidade", href: "#" },
          { label: "Termos", href: "#" },
          { label: "WhatsApp", href: WHATSAPP_URL },
        ].map((link) => (
          <a
            key={link.label}
            className="footer-link"
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
