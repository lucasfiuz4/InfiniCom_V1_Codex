# INFINICOM V1

Site institucional e landing pages da INFINICOM no mesmo projeto Astro.

## Stack

- Astro para geração estática e rotas
- Tailwind CSS v4 para o sistema visual
- Alpine.js para menu, accordion, formulários e seletor da LP
- Lucide por meio de `astro-icon`
- `<Image />` do Astro para imagens responsivas e WebP

## Rotas implementadas

- `/` Home institucional
- `/lp/vivo-fibra` Landing page de Vivo Fibra
- `/privacidade` Estrutura provisória da política
- `/cookies` Estrutura provisória da política

## Sitemap

- `public/sitemap.xml`: arquivo entregue aos buscadores, contendo somente rotas publicadas.
- `SITEMAP.md`: documentação da arquitetura completa e das páginas planejadas.

O domínio canônico confirmado é `https://infinicom.com.br`.

## Desenvolvimento

```bash
npm install
npm run dev
```

Validação de produção:

```bash
npm run build
```

## Configuração do WhatsApp

Copie `.env.example` para `.env` e substitua `PUBLIC_WHATSAPP_NUMBER` pelo número comercial em formato internacional, sem espaços ou símbolos.

Exemplo para um número brasileiro:

```env
PUBLIC_WHATSAPP_NUMBER=5531999999999
```

Os formulários não enviam dados para backend. Eles validam os campos, montam a mensagem e abrem `wa.me`.

O botão flutuante utiliza o link direto de atendimento definido em `src/config/site.ts`.

## Pendências de lançamento

- Adicionar o logo Vivo somente após receber o arquivo autorizado e confirmar as regras de cobranding.
- Confirmar telefone, e-mail, endereço, horário e número do WhatsApp.
- Validar textos jurídicos de privacidade e cookies.
- Inserir preços, velocidades e condições somente a partir de dados comerciais oficiais.
