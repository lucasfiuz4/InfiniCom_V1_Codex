# Estados de interface da INFINICOM

Este documento registra os estados que precisam ser considerados na V1 e evita representar situações que a arquitetura atual não possui.

## Formulários

- Normal: campos disponíveis para preenchimento.
- Campo inválido: mensagem específica junto ao campo e foco no primeiro erro.
- Redirecionando: botão desabilitado e texto `Abrindo WhatsApp...`.
- Mensagem preparada: aviso com link manual caso o WhatsApp não abra.
- JavaScript indisponível: link direto para o atendimento dentro de `noscript`.

Como não existe backend na V1, o site não deve afirmar que um lead foi recebido ou enviado com sucesso. A confirmação real acontece somente quando o visitante envia a mensagem no WhatsApp.

## Busca de conteúdos

- Resultados encontrados: quantidade apresentada em uma região `aria-live`.
- Nenhum resultado: mensagem contextual e ação para limpar os filtros.

A busca usa dados já presentes na página e responde imediatamente no navegador. Estados de carregamento e erro serão necessários somente se a busca passar a depender de API ou CMS remoto.

## Conteúdos

Todos os artigos exigem imagem de capa e texto alternativo no schema atual.

Casos que devem ser conferidos antes de publicar:

- Título curto em uma linha.
- Título médio em duas linhas.
- Título longo em três ou mais linhas no mobile.
- Resumo curto.
- Resumo longo sem desalinhamento dos cards.
- Imagem horizontal e imagem com assunto próximo das bordas.

## Menu

- Fechado.
- Aberto no mobile.
- Submenu Soluções aberto.
- Submenu Para Empresas aberto.
- Fechamento com `Escape` e retorno do foco ao botão.
- Fechamento após acessar um link.
- Bloqueio da rolagem da página enquanto o menu mobile está aberto.

## Páginas utilitárias

- `/obrigado/`: continuidade do atendimento, sem confirmação falsa de recebimento.
- `/404/`: recuperação de navegação com acesso à Home e às áreas de soluções.
