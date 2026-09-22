import Link from "next/link";
import { categoryInfo, services, type Category } from "@/lib/data";
import Reveal from "./Reveal";

const order: Category[] = ["facial", "corporal", "capilar"];

export default function CategoriesSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="font-serif-display text-3xl md:text-4xl">
          Tratamentos para cada objetivo
        </h2>
        <p className="mt-4 text-muted">
          Protocolos personalizados divididos por área de cuidado, para você
          encontrar exatamente o que precisa.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {order.map((cat, i) => {
          const count = services.filter((s) => s.category === cat).length;
          return (
            <Reveal key={cat} delay={i * 0.12}>
              <Link
                href={`/servicos?categoria=${cat}`}
                className="group block h-full rounded-2xl bg-surface border border-rose p-8 hover:border-gold hover:shadow-md transition-all"
              >
                <span className="text-xs uppercase tracking-widest text-gold">
                  {count} tratamentos
                </span>
                <h3 className="font-serif-display text-2xl mt-2 mb-3">
                  {categoryInfo[cat].label}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {categoryInfo[cat].description}
                </p>
                <span className="inline-block mt-6 text-sm text-rose-deep group-hover:translate-x-1 transition-transform">
                  Ver tratamentos →
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
