"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";
import Reveal from "./Reveal";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-rose/40 py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="font-serif-display text-3xl md:text-4xl mb-12">
            Quem confia, indica
          </h2>
        </Reveal>

        <div className="min-h-[180px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-serif-display text-xl md:text-2xl leading-relaxed text-foreground">
                &ldquo;{testimonials[index].text}&rdquo;
              </p>
              <p className="mt-6 text-sm uppercase tracking-widest text-rose-deep">
                {testimonials[index].name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ver depoimento ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-rose-deep" : "w-2 bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
