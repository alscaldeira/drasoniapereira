"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    title: "Cuidado que vai além da estética",
    subtitle:
      "Tratamentos faciais, corporais e capilares personalizados para realçar sua beleza natural.",
  },
  {
    title: "Mais de 10 anos cuidando de você",
    subtitle:
      "Técnica, escuta e acolhimento em cada procedimento, com a confiança de quem já é cliente.",
  },
  {
    title: "Resultados reais, com segurança",
    subtitle:
      "Protocolos personalizados para o seu objetivo, do rosto ao corpo, com acompanhamento próximo.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-rose/60 via-background to-background">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 text-center">
        <div className="min-h-[220px] md:min-h-[200px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="font-serif-display text-4xl md:text-6xl leading-tight max-w-3xl mx-auto">
                {slides[index].title}
              </h1>
              <p className="mt-6 text-muted text-base md:text-lg max-w-xl mx-auto">
                {slides[index].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5511910630909"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-rose-deep text-white px-8 py-3.5 tracking-wide hover:bg-gold transition-colors"
          >
            Agendar avaliação
          </a>
          <Link
            href="/servicos"
            className="rounded-full border border-rose-deep text-rose-deep px-8 py-3.5 tracking-wide hover:bg-rose transition-colors"
          >
            Conhecer os serviços
          </Link>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ir para o slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-rose-deep" : "w-2 bg-rose"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
