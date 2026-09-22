export type Category = "facial" | "corporal" | "capilar";

export type Service = {
  slug: string;
  name: string;
  category: Category;
  short: string;
  description: string;
};

export const categoryInfo: Record<
  Category,
  { label: string; description: string }
> = {
  facial: {
    label: "Facial",
    description:
      "Tratamentos para rejuvenescimento, viço e equilíbrio da pele do rosto.",
  },
  corporal: {
    label: "Corporal",
    description:
      "Contorno corporal, redução de medidas e bem-estar através de técnicas manuais e tecnológicas.",
  },
  capilar: {
    label: "Capilar",
    description:
      "Estímulo ao crescimento e fortalecimento capilar com enzimas e mesoterapia.",
  },
};

export const services: Service[] = [
  {
    slug: "dermaholler",
    name: "Dermaholler (Microagulhamento)",
    category: "facial",
    short: "Estimula colágeno e melhora textura, poros e cicatrizes.",
    description:
      "Estimula a produção de colágeno através de microagulhas, melhorando textura, cicatrizes de acne, poros e firmeza da pele.",
  },
  {
    slug: "enzimas-vitaminas",
    name: "Enzimas e Vitaminas",
    category: "facial",
    short: "Revitaliza a pele com hidratação profunda e viço.",
    description:
      "Aplicação de enzimas e vitaminas que revitalizam a pele, promovendo viço, hidratação profunda e uniformidade do tom.",
  },
  {
    slug: "botox",
    name: "Botox",
    category: "facial",
    short: "Suaviza linhas de expressão com resultado natural.",
    description:
      "Toxina botulínica aplicada para suavizar linhas de expressão e prevenir o envelhecimento precoce, com resultado natural.",
  },
  {
    slug: "drenagem-linfatica-facial",
    name: "Drenagem Linfática Facial",
    category: "facial",
    short: "Reduz inchaço e devolve luminosidade ao rosto.",
    description:
      "Técnica manual que reduz inchaço, melhora a circulação e devolve o contorno e a luminosidade do rosto.",
  },
  {
    slug: "skinbooster",
    name: "Skinbooster",
    category: "facial",
    short: "Hidratação profunda com ácido hialurônico.",
    description:
      "Bioestimulador à base de ácido hialurônico que hidrata profundamente e melhora a elasticidade da pele de dentro para fora.",
  },
  {
    slug: "limpeza-de-pele",
    name: "Limpeza de Pele",
    category: "facial",
    short: "Remove impurezas e prepara a pele para outros cuidados.",
    description:
      "Remoção de impurezas, cravos e células mortas, deixando a pele mais limpa, saudável e receptiva a outros tratamentos.",
  },
  {
    slug: "radiofrequencia",
    name: "Radiofrequência",
    category: "facial",
    short: "Efeito lifting e firmeza para a pele do rosto.",
    description:
      "Tecnologia que estimula colágeno e elastina, promovendo efeito lifting, firmeza e melhora da flacidez facial.",
  },
  {
    slug: "hidrolipoclasia",
    name: "Hidrolipoclasia (Hidrolipo)",
    category: "corporal",
    short: "Reduz gordura localizada e medidas corporais.",
    description:
      "Técnica que reduz gordura localizada e medidas corporais de forma não invasiva, remodelando o contorno do corpo.",
  },
  {
    slug: "drenagem-linfatica-corporal",
    name: "Drenagem Linfática Corporal",
    category: "corporal",
    short: "Reduz retenção de líquidos e traz sensação de leveza.",
    description:
      "Massagem terapêutica que estimula a circulação linfática, reduz retenção de líquidos e proporciona sensação de leveza.",
  },
  {
    slug: "drenagem-pos-cirurgico",
    name: "Drenagem Linfática Pós-Cirúrgico",
    category: "corporal",
    short: "Acelera a recuperação e previne complicações no pós-operatório.",
    description:
      "Cuidado essencial no pós-operatório, acelera a recuperação, reduz inchaço e previne complicações como fibroses.",
  },
  {
    slug: "carboxiterapia",
    name: "Carboxiterapia",
    category: "corporal",
    short: "Melhora circulação e reduz celulite e gordura localizada.",
    description:
      "Aplicação de gás carbônico que melhora a circulação, reduz celulite e gordura localizada, além de estimular a produção de colágeno.",
  },
  {
    slug: "modeladora-localizada",
    name: "Modeladora Localizada",
    category: "corporal",
    short: "Massagem vigorosa que define o contorno corporal.",
    description:
      "Massagem vigorosa que atua na queima de gordura localizada e modelagem corporal, deixando o contorno mais definido.",
  },
  {
    slug: "heccus",
    name: "Heccus",
    category: "corporal",
    short: "Reduz medidas e melhora a pele com resultados progressivos.",
    description:
      "Tratamento que combina técnicas manuais e tecnológicas para reduzir medidas e melhorar o aspecto da pele com resultados progressivos.",
  },
  {
    slug: "massagem",
    name: "Massagem",
    category: "corporal",
    short: "Alivia tensões e promove bem-estar.",
    description:
      "Massagens relaxantes ou terapêuticas que aliviam tensões, promovem bem-estar e complementam os tratamentos estéticos.",
  },
  {
    slug: "bambuterapia",
    name: "Bambuterapia",
    category: "corporal",
    short: "Massagem modeladora com bambus que ativa a circulação.",
    description:
      "Massagem modeladora realizada com bambus, que ativa a circulação, reduz medidas e proporciona relaxamento muscular.",
  },
  {
    slug: "ventosaterapia",
    name: "Ventosaterapia",
    category: "corporal",
    short: "Estimula a circulação e auxilia na redução de celulite.",
    description:
      "Uso de ventosas para estimular a circulação, aliviar tensões musculares e auxiliar na redução de celulite.",
  },
  {
    slug: "enzimas-crescimento-capilar",
    name: "Enzimas para Crescimento Capilar",
    category: "capilar",
    short: "Fortalece os fios e favorece o crescimento saudável.",
    description:
      "Aplicação de enzimas que estimulam os folículos capilares, fortalecendo os fios e favorecendo o crescimento saudável.",
  },
  {
    slug: "mesoterapia-capilar",
    name: "Mesoterapia Capilar",
    category: "capilar",
    short: "Combate a queda e nutre os fios em profundidade.",
    description:
      "Injeção de ativos específicos no couro cabeludo para combater a queda, fortalecer e nutrir os fios.",
  },
];

export const testimonials = [
  {
    name: "Cliente há 3 anos",
    text:
      "Sou cliente da Dra. Sônia há anos e nunca me senti tão bem cuidada. Cada procedimento é explicado com calma e o resultado sempre supera o esperado.",
  },
  {
    name: "Cliente há 5 anos",
    text:
      "O que mais me encanta é a confiança que ela transmite. Já indiquei para toda minha família e todos ficaram apaixonados pelo atendimento.",
  },
  {
    name: "Cliente há 1 ano",
    text:
      "Profissionalismo, técnica e acolhimento. Saio de cada sessão me sentindo renovada, por dentro e por fora.",
  },
];

export const contactInfo = {
  instagramHandle: "soniapereirabiomedica",
  instagramUrl: "https://instagram.com/soniapereirabiomedica",
  whatsappDisplay: "+55 11 91063-0909",
  whatsappUrl: "https://wa.me/5511910630909",
  address:
    "Av. Dr. Cardoso de Melo, 984 - Vila Olímpia, São Paulo - SP, 04548-004",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Av.+Dr.+Cardoso+de+Melo,+984+-+Vila+Ol%C3%ADmpia,+S%C3%A3o+Paulo+-+SP,+04548-004&output=embed",
};
