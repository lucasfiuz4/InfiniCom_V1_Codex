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
- `/para-sua-casa/` Catálogo consultivo de soluções residenciais
- `/para-sua-casa/vivo-fibra/` Página institucional de Vivo Fibra para navegação e busca orgânica
- `/para-sua-empresa/` Catálogo consultivo de soluções empresariais
- `/para-sua-empresa/internet-empresarial/` Página individual de Internet empresarial
- `/sobre/` Página institucional da INFINICOM
- `/conteudos/` Blog e central de conteúdos
- `/conteudos/categoria/[categoria]/` Páginas editoriais por categoria
- `/conteudos/[slug]/` Artigos individuais com dados estruturados
- `/contato/` Contato por intenção com encaminhamento para o WhatsApp
- `/lp/vivo-fibra/` Landing page de campanha, sem navegação institucional e marcada como `noindex`
- `/obrigado/` Continuidade do atendimento pelo WhatsApp, marcada como `noindex`
- `/404/` Página personalizada de recuperação de navegação, marcada como `noindex`
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

Copie `.env.example` para `.env`. O celular, telefone e WhatsApp globais usam o mesmo número, registrado em formato internacional sem espaços ou símbolos.

Exemplo para um número brasileiro:

```env
PUBLIC_WHATSAPP_NUMBER=5531995308690
PUBLIC_PHONE_NUMBER=5531995308690
PUBLIC_PHONE_DISPLAY=(31) 99530-8690
```

Os formulários não enviam dados para backend. Eles validam os campos, montam a mensagem e abrem `wa.me`.

O formulário da landing page também inclui UTMs, referência e página de origem na mensagem. Quando `dataLayer` está disponível, ele registra o evento `lp_whatsapp_submit`.

O botão flutuante utiliza o link direto de atendimento definido em `src/config/site.ts`.

## Conteúdos

Os artigos ficam em `src/content/conteudos` e são validados pelo schema de `src/content.config.ts`.

O projeto gera páginas de artigos, categorias, dados estruturados `BlogPosting` e o feed `/rss.xml` durante o build.

Os estados previstos para formulários, busca, conteúdo, menu e páginas utilitárias estão documentados em `UX_STATES.md`.

## Pendências de lançamento

- Adicionar o logo Vivo somente após receber o arquivo autorizado e confirmar as regras de cobranding.
- Confirmar o horário de atendimento e os canais sociais antes da publicação final.
- Validar textos jurídicos de privacidade e cookies.
- Inserir preços, velocidades e condições somente a partir de dados comerciais oficiais.
