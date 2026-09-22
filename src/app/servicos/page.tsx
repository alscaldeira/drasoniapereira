import { Suspense } from "react";
import type { Metadata } from "next";
import ServicosClient from "@/components/ServicosClient";

export const metadata: Metadata = {
  title: "Serviços | Dra. Sônia Pereira",
  description:
    "Conheça os tratamentos faciais, corporais e capilares da Dra. Sônia Pereira: botox, skinbooster, hidrolipoclasia, carboxiterapia e mais.",
};

export default function ServicosPage() {
  return (
    <Suspense>
      <ServicosClient />
    </Suspense>
  );
}
