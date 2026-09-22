import Image from "next/image";
import Hero from "@/components/Hero";
import CategoriesSection from "@/components/CategoriesSection";
import Testimonials from "@/components/Testimonials";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoriesSection />

      <section className="mx-auto max-w-5xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
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
            Sobre
          </span>
          <h2 className="font-serif-display text-3xl md:text-4xl mt-3 mb-5">
            Confiança construída ao longo de mais de 10 anos
          </h2>
          <p className="text-muted leading-relaxed">
            Sou a Dra. Sônia Pereira, biomédica com mais de 10 anos de
            experiência na área de estética. Ao longo desses anos, construí
            uma relação de confiança com cada cliente, unindo técnica,
            atualização constante e um cuidado verdadeiro com o bem-estar e a
            autoestima de quem se trata comigo.
          </p>
          <Link
            href="/sobre"
            className="inline-block mt-6 text-rose-deep hover:text-gold transition-colors text-sm tracking-wide"
          >
            Conhecer minha trajetória →
          </Link>
        </Reveal>
      </section>

      <Testimonials />

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <Reveal>
          <h2 className="font-serif-display text-3xl md:text-4xl mb-4">
            Vamos cuidar de você?
          </h2>
          <p className="text-muted mb-8">
            Agende uma avaliação e descubra o tratamento ideal para o seu
            objetivo.
          </p>
          <a
            href="https://wa.me/5511910630909"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-rose-deep text-white px-8 py-3.5 tracking-wide hover:bg-gold transition-colors"
          >
            Agendar pelo WhatsApp
          </a>
        </Reveal>
      </section>
    </>
  );
}
