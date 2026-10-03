// Fonte única dos dados de contato e legais do site.
//
// ⚠️ MOCK: tudo que está marcado "MOCK" abaixo é dado de exemplo e precisa ser
// substituído pelo valor real da farmácia antes de publicar.

const WHATSAPP_NUMBER = "5511984170088";

export const SITE = {
  name: "Violeta Farmácia com Manipulação",
  phoneDisplay: "(11) 98417-0088",
  phoneTel: "+5511984170088",
  email: "adm@farmaciavioleta.com.br",
  instagramHandle: "@farmaciavioleta",
  instagramUrl: "https://instagram.com/farmaciavioleta",

  // MOCK: endereço de exemplo. Trocar pelo endereço real.
  address: {
    lines: ["Rua das Violetas, 120", "Vila Mariana, São Paulo / SP"],
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+das+Violetas+120+Vila+Mariana+S%C3%A3o+Paulo",
  },

  hours: ["Segunda a sexta: 08h às 19h", "Sábado: 08h às 13h"],

  // MOCK: dados legais de exemplo (zerados de propósito, nada aqui é real).
  // Trocar por CNPJ, farmacêutico(a) responsável e CRF reais.
  legal: {
    cnpj: "00.000.000/0001-00",
    pharmacist: "Nome do(a) farmacêutico(a) responsável",
    crf: "CRF-SP 00000",
  },
} as const;

export const WHATSAPP_MESSAGES = {
  general: "Olá! Gostaria de falar com a equipe da Violeta.",
  prescription: "Olá! Gostaria de enviar minha receita para manipulação.",
  pet: "Olá! Gostaria de saber sobre manipulados dermatológicos veterinários para o meu pet.",
  nutraceuticals: "Olá! Gostaria de saber sobre suplementos e nutracêuticos personalizados.",
  dermo: "Olá! Gostaria de saber sobre fórmulas de skincare e capilares.",
  resume: "Olá! Gostaria de enviar meu currículo para as vagas abertas.",
} as const;

export function whatsappUrl(message: keyof typeof WHATSAPP_MESSAGES = "general") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGES[message])}`;
}
