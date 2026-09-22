import { contactInfo } from "@/lib/data";

export default function MapEmbed() {
  return (
    <div className="w-full aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden border border-rose shadow-sm">
      <iframe
        title="Localização da clínica"
        src={contactInfo.mapEmbedSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
