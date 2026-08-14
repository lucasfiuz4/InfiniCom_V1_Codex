export const site = {
  name: 'INFINICOM',
  description:
    'Consultoria comercial especializada em soluções Vivo para casas, empresas, condomínios e construtoras em Minas Gerais.',
  whatsappNumber: import.meta.env.PUBLIC_WHATSAPP_NUMBER || '5531999999999',
  floatingWhatsappUrl:
    'https://api.whatsapp.com/send/?phone=5531995308690&text=Ol%C3%A1%21%20Estava%20navegando%20no%20site%20da%20InfiniCom%20e%20gostaria%20de%20falar%20com%20a%20equipe%20de%20atendimento.&type=phone_number&app_absent=0',
  phoneDisplay: import.meta.env.PUBLIC_PHONE_DISPLAY || '(31) 99999-9999',
  email: import.meta.env.PUBLIC_CONTACT_EMAIL || 'contato@infinicom.com.br',
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
