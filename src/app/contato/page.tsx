import type { Metadata } from "next";
import { MapPin, Phone } from "lucide-react";
import { contactInfo } from "@/lib/data";
import MapEmbed from "@/components/MapEmbed";
import Reveal from "@/components/Reveal";
import InstagramIcon from "@/components/icons/InstagramIcon";

export const metadata: Metadata = {
  title: "Contato | Dra. Sônia Pereira",
  description:
    "Agende sua avaliação com a Dra. Sônia Pereira em Vila Olímpia, São Paulo. WhatsApp, Instagram e localização.",
};

export default function ContatoPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <Reveal className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-widest text-gold">
          Contato
        </span>
        <h1 className="font-serif-display text-4xl md:text-5xl mt-3 mb-4">
          Vamos agendar sua avaliação?
        </h1>
        <p className="text-muted">
          Fale diretamente pelo WhatsApp ou visite a clínica em Vila Olímpia.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <Reveal className="space-y-5">
          <a
            href={contactInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-rose bg-surface p-6 hover:border-gold transition-colors"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-rose text-rose-deep shrink-0">
              <Phone size={20} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted">
                WhatsApp
              </p>
              <p className="font-serif-display text-lg">
                {contactInfo.whatsappDisplay}
              </p>
            </div>
          </a>

          <a
            href={contactInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-rose bg-surface p-6 hover:border-gold transition-colors"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-rose text-rose-deep shrink-0">
              <InstagramIcon size={20} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted">
                Instagram
              </p>
              <p className="font-serif-display text-lg">
                @{contactInfo.instagramHandle}
              </p>
            </div>
          </a>

          <div className="flex items-start gap-4 rounded-2xl border border-rose bg-surface p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-rose text-rose-deep shrink-0">
              <MapPin size={20} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted">
                Endereço
              </p>
              <p className="font-serif-display text-lg leading-snug">
                {contactInfo.address}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <MapEmbed />
        </Reveal>
      </div>
    </section>
  );
}
