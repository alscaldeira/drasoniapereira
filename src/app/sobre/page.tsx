import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Sobre | Dra. Sônia Pereira",
  description:
    "Conheça a trajetória da Dra. Sônia Pereira, biomédica esteta com mais de 10 anos de experiência em São Paulo.",
};

export default function SobrePage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-rose">
            <Image
              src="/images/dra-sonia-pereira.jpg"
              alt="Dra. Sônia Pereira"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 480px, 100vw"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="text-xs uppercase tracking-widest text-gold">
            Sobre a profissional
          </span>
          <h1 className="font-serif-display text-4xl md:text-5xl mt-3 mb-6">
            Dra. Sônia Pereira
          </h1>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              Sou biomédica com mais de 10 anos de experiência dedicada à
              estética facial, corporal e capilar. Ao longo desse tempo,
              construí uma relação de confiança com cada cliente que passa
              pela clínica — muitos deles me acompanham há anos.
            </p>
            <p>
              Acredito que cuidar da pele e do corpo é também cuidar da
              autoestima. Por isso, cada tratamento é pensado individualmente,
              unindo técnica, atualização constante e um olhar atento às
              necessidades de cada pessoa.
            </p>
            <p>
              Meu compromisso é oferecer procedimentos seguros, resultados
              reais e um atendimento acolhedor, do início ao fim da sua
              jornada de cuidado.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <div className="mt-16 grid sm:grid-cols-3 gap-6 text-center">
          <div className="rounded-2xl border border-rose bg-surface p-8">
            <p className="font-serif-display text-4xl text-rose-deep">10+</p>
            <p className="text-sm text-muted mt-2">anos de experiência</p>
          </div>
          <div className="rounded-2xl border border-rose bg-surface p-8">
            <p className="font-serif-display text-4xl text-rose-deep">18</p>
            <p className="text-sm text-muted mt-2">tratamentos especializados</p>
          </div>
          <div className="rounded-2xl border border-rose bg-surface p-8">
            <p className="font-serif-display text-4xl text-rose-deep">100%</p>
            <p className="text-sm text-muted mt-2">foco em cuidado individual</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
