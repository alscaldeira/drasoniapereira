"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { categoryInfo, services, type Category } from "@/lib/data";

const order: Category[] = ["facial", "corporal", "capilar"];

export default function ServicosClient() {
  const searchParams = useSearchParams();
  const initial = searchParams.get("categoria") as Category | null;
  const [active, setActive] = useState<Category>(
    initial && order.includes(initial) ? initial : "facial"
  );
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const filtered = useMemo(
    () => services.filter((s) => s.category === active),
    [active]
  );

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs uppercase tracking-widest text-gold">
          Nossos serviços
        </span>
        <h1 className="font-serif-display text-4xl md:text-5xl mt-3 mb-4">
          Tratamentos
        </h1>
        <p className="text-muted">
          Escolha uma categoria para conhecer os tratamentos disponíveis.
        </p>
      </div>

      <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
        {order.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActive(cat);
              setOpenSlug(null);
            }}
            className={`rounded-full px-6 py-2.5 text-sm tracking-wide border transition-colors ${
              active === cat
                ? "bg-rose-deep text-white border-rose-deep"
                : "border-rose text-muted hover:border-rose-deep hover:text-rose-deep"
            }`}
          >
            {categoryInfo[cat].label}
          </button>
        ))}
      </div>

      <p className="text-center text-muted mb-10 max-w-xl mx-auto">
        {categoryInfo[active].description}
      </p>

      <div className="grid gap-4">
        {filtered.map((service) => {
          const isOpen = openSlug === service.slug;
          return (
            <div
              key={service.slug}
              className="rounded-2xl border border-rose bg-surface overflow-hidden"
            >
              <button
                onClick={() => setOpenSlug(isOpen ? null : service.slug)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <div>
                  <h3 className="font-serif-display text-xl">
                    {service.name}
                  </h3>
                  <p className="text-sm text-muted mt-1">{service.short}</p>
                </div>
                <ChevronDown
                  className={`shrink-0 text-rose-deep transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="px-6"
                  >
                    <div className="pb-6 border-t border-rose pt-4">
                      <p className="text-muted leading-relaxed">
                        {service.description}
                      </p>
                      <a
                        href="https://wa.me/5511910630909"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-sm text-rose-deep hover:text-gold transition-colors"
                      >
                        Agendar este tratamento →
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
