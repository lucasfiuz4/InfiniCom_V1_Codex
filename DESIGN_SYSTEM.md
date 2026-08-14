# Design System INFINICOM V1

## Direção

Site institucional para públicos residenciais e empresariais, com linguagem clean, premium, editorial e humana. O sistema preserva a hierarquia definida no `UXDE.md`: INFINICOM como marca principal e Vivo como portfólio comercial.

Dials aplicados:

- Design Variance: 7
- Motion Intensity: 3
- Visual Density: 4

A V1 usa transições curtas e feedback de interação. Não utiliza GSAP, scroll hijacking ou animações decorativas contínuas.

## Foundations

### Cores

- `--color-brand-primary`: ação e identidade INFINICOM
- `--color-brand-hover`: estado hover de ações principais
- `--color-brand-deep`: superfícies institucionais de alto contraste
- `--color-brand-night`: footer e superfícies profundas
- `--color-bg-primary`: canvas neutro
- `--color-bg-secondary`: separação de capítulos
- `--color-surface`: componentes sobre canvas
- `--color-text-primary`: títulos e conteúdo principal
- `--color-text-secondary`: texto de apoio
- `--color-border`: separadores discretos
- `--color-focus`: foco visível de teclado

Hexadecimais ficam centralizados em `src/styles/global.css`. Novos componentes devem preferir tokens semânticos.

### Tipografia

- Manrope Variable: títulos, números e CTAs
- Inter Variable: navegação, corpo, formulários e conteúdo funcional
- `display-title`: H1 responsivo com `clamp()`
- `section-title`: H2 responsivo com `clamp()`

Manrope não deve ser usada em parágrafos longos. Inter não deve competir com os títulos.

### Espaçamento e grid

- Container máximo: 1280px
- Margem mobile: 16px
- Seções: `clamp(72px, 8vw, 128px)`
- Layouts: grid explícito com colapso para uma coluna abaixo de 768px

### Formas

- Cards e imagens: 16px
- Campos e botões: 12px
- Pills: somente controles segmentados e chips informativos

### Motion

- Entrada inicial: opacity e translateY por 560ms
- Hover e active: 180ms
- Toda animação respeita `prefers-reduced-motion`

## Componentes

### Header

Header de 72px, sticky, navegação em uma linha a partir de 1280px e menu Alpine abaixo desse breakpoint.

### Botões

- Primary: ação comercial sobre superfícies claras
- Light: ação principal sobre fundo púrpura
- Outline: ação secundária

Todos possuem altura mínima de 48px, foco visível e feedback de pressionamento.

### Formulário WhatsApp

Labels permanecem visíveis, campos obrigatórios recebem validação conjunta e o erro aparece em contexto. A mensagem só é aberta no WhatsApp após consentimento.

### Accordion

Estado controlado por Alpine, botão semântico e `aria-expanded`. Um item permanece aberto por padrão para favorecer descoberta.

### Atalho flutuante do WhatsApp

Botão de 56px fixado no canto inferior direito, com margem para `safe-area` em dispositivos móveis. No desktop, exibe o rótulo "Fale com a equipe"; no mobile, preserva o formato compacto para não cobrir os CTAs. O verde é uma exceção semântica exclusiva deste canal e usa texto verde-escuro para preservar contraste. Um pulso espaçado reforça a hierarquia sem animação contínua agressiva e respeita `prefers-reduced-motion`. Ao ser acionado, abre um painel compacto com apresentação da equipe e um único CTA para iniciar a conversa. Usa ícones Lucide, fechamento por botão, clique externo ou tecla `Esc` e rótulos acessíveis. Deve permanecer como único controle flutuante da página.

### Imagens

As imagens vivem em `src/assets/images` e são renderizadas com `<Image />`. O build gera variantes WebP com dimensões reservadas para evitar CLS.

## Regras de expansão

- Reutilizar CTA, tokens e componentes antes de criar variantes.
- Não inventar preço, cobertura, velocidade ou número de clientes.
- Não recriar o logo Vivo.
- Não misturar outra família de ícones com Lucide.
- Não adicionar animações de scroll antes da validação da copy e da estrutura.
