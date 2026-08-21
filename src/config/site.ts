export const site = {
  name: 'INFINICOM',
  legalName: 'INFINICOM LTDA',
  cnpj: '58.684.626/0001-44',
  legalAddress: 'Rua Vicente Risola, 456, Santa Inês, Belo Horizonte, MG, CEP 31080-160',
  url: 'https://infinicom.com.br',
  description:
    'Consultoria comercial especializada em soluções Vivo para casas, empresas, condomínios e construtoras em Minas Gerais.',
  whatsappNumber: import.meta.env.PUBLIC_WHATSAPP_NUMBER || '5531995308690',
  floatingWhatsappUrl:
    'https://api.whatsapp.com/send/?phone=5531995308690&text=Ol%C3%A1%21%20Estava%20navegando%20no%20site%20da%20InfiniCom%20e%20gostaria%20de%20falar%20com%20a%20equipe%20de%20atendimento.&type=phone_number&app_absent=0',
  phoneNumber: import.meta.env.PUBLIC_PHONE_NUMBER || '5531995308690',
  phoneDisplay: import.meta.env.PUBLIC_PHONE_DISPLAY || '(31) 99530-8690',
  email: import.meta.env.PUBLIC_CONTACT_EMAIL || 'contato@infinicom.com.br',
  privacyEmail: import.meta.env.PUBLIC_PRIVACY_EMAIL || 'admin@infinicom.com.br',
  privacyContactName: 'André Souza',
  gtmId: import.meta.env.PUBLIC_GTM_ID || '',
  googleTagId: import.meta.env.PUBLIC_GOOGLE_TAG_ID || '',
  googleAdsId: import.meta.env.PUBLIC_GOOGLE_ADS_ID || '',
  serviceHours: import.meta.env.PUBLIC_SERVICE_HOURS || '',
  instagramUrl: import.meta.env.PUBLIC_INSTAGRAM_URL || '',
  linkedinUrl: import.meta.env.PUBLIC_LINKEDIN_URL || '',
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
