export const site = {
  name: 'INFINICOM',
  description:
    'Consultoria comercial especializada em soluções Vivo para casas, empresas, condomínios e construtoras em Minas Gerais.',
  whatsappNumber: import.meta.env.PUBLIC_WHATSAPP_NUMBER || '5531999999999',
  phoneDisplay: import.meta.env.PUBLIC_PHONE_DISPLAY || '(31) 99999-9999',
  email: import.meta.env.PUBLIC_CONTACT_EMAIL || 'contato@infinicom.com.br',
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
