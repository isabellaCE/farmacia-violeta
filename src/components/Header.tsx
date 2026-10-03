"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { whatsappUrl } from "@/lib/site";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#pet", label: "Saúde Pet" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="on-dark sticky top-0 z-50 bg-violet-900/95 backdrop-blur text-cream shadow-sm shadow-violet-950/20">
      <Container className="flex items-center justify-between py-3">
        <a href="#hero" className="flex items-center gap-3 shrink-0">
          <Image
            src="/brand/logo.png"
            alt="Violeta Farmácia com Manipulação"
            width={1395}
            height={613}
            quality={90}
            preload
            className="h-11 w-auto sm:h-12"
          />
          <span className="hidden sm:inline-flex items-center rounded-full bg-peach-500/20 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-peach-300">
            30 anos
          </span>
        </a>

        <nav aria-label="Principal" className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-violet-100 transition-colors hover:text-peach-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl("general")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-peach-500 px-4 py-2.5 text-sm font-semibold text-violet-950 transition-colors hover:bg-peach-400 lg:px-5"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Fale conosco</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden rounded-full p-2 text-cream"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {open && (
        <div id="menu-mobile" className="lg:hidden border-t border-violet-700/60 bg-violet-900">
          <Container>
            <nav aria-label="Principal (mobile)" className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-violet-100 hover:bg-violet-800"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
