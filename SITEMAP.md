# Sitemap da INFINICOM

Este documento registra a arquitetura completa planejada para o site e diferencia as rotas já implementadas das páginas futuras.

Domínio canônico confirmado: `https://infinicom.com.br`.

## Status

- Implementada: a rota existe e pode ser publicada.
- Estrutura provisória: a rota existe, mas ainda depende de conteúdo definitivo.
- Planejada: faz parte da arquitetura, porém ainda não foi desenvolvida.

## Arquitetura completa

```text
/
├── Home                                             [Implementada]
│
├── /para-sua-casa/                                 [Implementada]
│   ├── /para-sua-casa/vivo-fibra/                  [Implementada]
│   ├── /para-sua-casa/vivo-controle/               [Planejada]
│   ├── /para-sua-casa/vivo-pos/                    [Planejada]
│   ├── /para-sua-casa/vivo-total/                  [Planejada]
│   └── /para-sua-casa/portabilidade/               [Planejada]
│
├── /para-sua-empresa/                              [Implementada]
│   ├── /para-sua-empresa/internet-empresarial/     [Implementada]
│   ├── /para-sua-empresa/link-dedicado/            [Planejada]
│   ├── /para-sua-empresa/telefonia/                [Planejada]
│   ├── /para-sua-empresa/iot/                      [Planejada]
│   └── /para-sua-empresa/solucoes-personalizadas/  [Planejada]
│
├── /condominios-e-construtoras/                    [Planejada]
├── /consultar-cobertura/                           [Planejada]
├── /sobre/                                         [Implementada]
│
├── /conteudos/                                     [Implementada]
│   ├── /conteudos/categoria/[categoria]/           [Implementada]
│   └── /conteudos/[slug]/                          [Implementada]
├── /rss.xml                                        [Implementada]
│
├── /contato/                                       [Implementada]
│
├── /lp/
│   ├── /lp/vivo-fibra/                             [Implementada, campanha, noindex]
│   ├── /lp/portabilidade/                          [Planejada]
│   ├── /lp/vivo-total/                             [Planejada]
│   ├── /lp/vivo-empresas/                          [Planejada]
│   └── /lp/[campanha]/                             [Planejada]
│
├── /obrigado/                                      [Implementada, noindex]
├── /privacidade/                                   [Estrutura provisória]
├── /cookies/                                       [Estrutura provisória]
├── /termos/                                        [Planejada]
└── /404/                                           [Implementada, noindex]
```

## Navegação principal

```text
Início
Soluções
├── Vivo Fibra
├── Planos móveis
├── Vivo Total
├── Portabilidade
└── Consultar cobertura

Para Empresas
├── Visão geral
├── Internet empresarial
├── Link dedicado
├── Telefonia
└── Condomínios e construtoras

Conteúdos
Sobre
Contato

Ação
└── Falar com consultor
```

As rotas em `/lp/` são destinadas a campanhas e não fazem parte da navegação institucional. A solução Vivo Fibra presente no menu aponta para `/para-sua-casa/vivo-fibra/`.

## Footer

```text
INFINICOM
├── Descrição institucional
└── Falar com consultor

Soluções
├── Para sua casa
├── Vivo Fibra
├── Para sua empresa
└── Internet empresarial

Empresa
├── Sobre a INFINICOM
├── Conteúdos
├── Contato
└── Dúvidas frequentes

Atendimento
├── WhatsApp
├── Telefone
├── E-mail
└── Horário, quando configurado

Legal
├── Privacidade
└── Cookies

Redes sociais, quando configuradas
├── Instagram
└── LinkedIn

Informação institucional
└── Aviso sobre atendimento comercial e marcas de terceiros
```

O footer faz parte da arquitetura de informação, mas não representa uma rota própria. Apenas os links internos indexáveis entram no `sitemap.xml`; WhatsApp, telefone, e-mail e redes sociais permanecem fora dele.

## Fluxos principais

### Conversão institucional

```text
Tráfego
→ Home ou Landing Page
→ Escolha de perfil
→ Solução
→ Consulta de cobertura
→ WhatsApp
→ Consultor
```

### Conversão por mídia paga

```text
Google Ads ou outra campanha
→ Landing Page sem navegação institucional
→ Formulário com origem e UTMs
→ WhatsApp
→ Atendimento comercial
```

### Conteúdo orgânico

```text
Busca orgânica
→ Artigo
→ Página de produto
→ WhatsApp
```

### Campanhas

```text
Campanha
→ Landing Page
→ Seleção Casa ou Empresa
→ Formulário
→ WhatsApp
→ Página de obrigado
```

## Regra para o sitemap.xml

O arquivo `public/sitemap.xml` deve conter somente páginas publicadas e indexáveis. Rotas planejadas devem ser adicionadas ao XML apenas depois que existirem e tiverem conteúdo definitivo.

As páginas `/obrigado/` e `/404/` existem como rotas utilitárias, mas não entram no `sitemap.xml` porque estão marcadas como `noindex`.

O domínio deve permanecer sem `www` nas URLs canônicas e no `sitemap.xml`.
