import { MessageCircle } from "lucide-react";
import { contactInfo } from "@/lib/data";

export default function WhatsAppButton() {
  return (
    <a
      href={contactInfo.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-3.5 shadow-lg shadow-black/20 hover:scale-105 transition-transform"
    >
      <MessageCircle size={22} fill="white" strokeWidth={0} />
      <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
    </a>
  );
}
