import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { contactInfo } from "@/lib/data";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/90 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-serif-display text-2xl mb-3">Dra. Sônia Pereira</h3>
          <p className="text-sm text-background/70 leading-relaxed">
            Biomédica esteta com mais de 10 anos de experiência, dedicada a
            cuidar da sua pele, corpo e autoestima com técnica e acolhimento.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold mb-4">
            Navegação
          </h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><Link href="/servicos" className="hover:text-background">Serviços</Link></li>
            <li><Link href="/sobre" className="hover:text-background">Sobre</Link></li>
            <li><Link href="/contato" className="hover:text-background">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold mb-4">
            Contato
          </h4>
          <ul className="space-y-3 text-sm text-background/70">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="mt-0.5 shrink-0" />
              <span>{contactInfo.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="shrink-0" />
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-background"
              >
                {contactInfo.whatsappDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <InstagramIcon size={18} />
              <a
                href={contactInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-background"
              >
                @{contactInfo.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10 py-5 text-center text-xs text-background/50">
        © {new Date().getFullYear()} Dra. Sônia Pereira. Todos os direitos reservados.
      </div>
    </footer>
  );
}
