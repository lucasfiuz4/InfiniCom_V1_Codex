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
├── /para-sua-casa/                                 [Planejada]
│   ├── /para-sua-casa/vivo-fibra/                  [Planejada]
│   ├── /para-sua-casa/vivo-controle/               [Planejada]
│   ├── /para-sua-casa/vivo-pos/                    [Planejada]
│   ├── /para-sua-casa/vivo-total/                  [Planejada]
│   └── /para-sua-casa/portabilidade/               [Planejada]
│
├── /para-sua-empresa/                              [Planejada]
│   ├── /para-sua-empresa/internet-empresarial/     [Planejada]
│   ├── /para-sua-empresa/link-dedicado/            [Planejada]
│   ├── /para-sua-empresa/telefonia/                [Planejada]
│   ├── /para-sua-empresa/iot/                      [Planejada]
│   └── /para-sua-empresa/solucoes-personalizadas/  [Planejada]
│
├── /condominios-e-construtoras/                    [Planejada]
├── /consultar-cobertura/                           [Planejada]
├── /sobre/                                         [Planejada]
│
├── /conteudos/                                     [Planejada]
│   └── /conteudos/[slug]/                          [Planejada]
│
├── /contato/                                       [Planejada]
│
├── /lp/
│   ├── /lp/vivo-fibra/                             [Implementada]
│   ├── /lp/portabilidade/                          [Planejada]
│   ├── /lp/vivo-total/                             [Planejada]
│   ├── /lp/vivo-empresas/                          [Planejada]
│   └── /lp/[campanha]/                             [Planejada]
│
├── /obrigado/                                      [Planejada]
├── /privacidade/                                   [Estrutura provisória]
├── /cookies/                                       [Estrutura provisória]
├── /termos/                                        [Planejada]
└── /404/                                           [Planejada]
```

## Navegação principal

```text
Para sua casa
Para sua empresa
Condomínios
Conteúdos
Sobre

Ações
├── Consultar cobertura
└── Falar com consultor
```

## Footer

```text
Soluções
├── Vivo Fibra
├── Planos móveis
├── Vivo Total
└── Portabilidade

Empresas
├── Internet empresarial
├── Link dedicado
├── Telefonia
└── Soluções personalizadas

Institucional
├── Sobre
├── Conteúdos
└── Contato

Legal
├── Privacidade
├── Cookies
└── Termos
```

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

O domínio deve permanecer sem `www` nas URLs canônicas e no `sitemap.xml`.
