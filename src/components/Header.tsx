"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b border-rose">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-20">
        <Link href="/" className="font-serif-display text-2xl tracking-wide text-foreground">
          Dra. Sônia Pereira
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-muted hover:text-rose-deep transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5511910630909"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-rose-deep text-white text-sm px-5 py-2.5 tracking-wide hover:bg-gold transition-colors"
          >
            Agendar avaliação
          </a>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-rose bg-background px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-wide text-muted hover:text-rose-deep transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5511910630909"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-rose-deep text-white text-sm px-5 py-2.5 tracking-wide text-center hover:bg-gold transition-colors"
          >
            Agendar avaliação
          </a>
        </nav>
      )}
    </header>
  );
}
