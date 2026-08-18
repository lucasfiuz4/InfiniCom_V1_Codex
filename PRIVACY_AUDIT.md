# Inventário de privacidade e cookies

Última revisão técnica: 18/08/2026

Este documento registra o funcionamento técnico observado no projeto. Ele serve de base para as Políticas de Privacidade e Cookies, mas não substitui a validação jurídica dos documentos finais.

## Escopo analisado

- Site institucional em Astro, com geração estática.
- Formulários de contato e consulta de cobertura.
- Redirecionamentos para WhatsApp.
- Parâmetros de campanha e página de origem.
- Scripts, armazenamento no navegador e integrações de analytics.
- Páginas de Privacidade e Cookies.

## Fluxo atual dos formulários

```text
Visitante
→ preenche o formulário no navegador
→ o site valida os campos localmente
→ o site monta uma mensagem com os dados
→ o navegador abre uma conversa no WhatsApp
→ o visitante confirma e envia a mensagem no WhatsApp
→ a equipe INFINICOM continua o atendimento
```

O projeto não possui backend, API de leads ou banco de dados. Antes do redirecionamento, os dados permanecem no navegador. Quando o visitante envia a mensagem, o tratamento continua no WhatsApp e nos processos internos de atendimento da INFINICOM.

## Dados tratados nos formulários

Dependendo do formulário e da intenção selecionada, o site pode tratar:

- Nome.
- Perfil residencial, empresarial ou empreendimento.
- Empresa ou empreendimento.
- Telefone ou WhatsApp.
- E-mail.
- Cidade.
- Produto ou serviço de interesse.
- Necessidade, dúvida ou mensagem livre.
- Origem, mídia, campanha e conteúdo de campanha.
- Página acessada.
- Domínio de referência.

Os campos de mensagem livre podem receber outros dados inseridos voluntariamente pelo visitante. A interface deve orientar o usuário a não informar dados pessoais sensíveis ou informações desnecessárias.

## Finalidades técnicas observadas

- Preparar a solicitação comercial ou de atendimento.
- Abrir a conversa no WhatsApp com a mensagem preenchida.
- Identificar produto, perfil e contexto da solicitação.
- Identificar a origem da campanha e a página que gerou o contato.
- Facilitar a continuidade do atendimento pela equipe.

As bases legais aplicáveis, os usos internos posteriores e os prazos de retenção precisam ser definidos e validados pela INFINICOM e por sua assessoria jurídica.

## Tecnologias de armazenamento e rastreamento

Na versão analisada, não foram encontrados:

- Uso de `document.cookie`.
- Uso de `localStorage`.
- Uso de `sessionStorage`.
- Google Analytics carregado.
- Google Tag Manager carregado.
- Meta Pixel carregado.
- Microsoft Clarity carregado.
- PostHog carregado.

Existem chamadas condicionais para `window.dataLayer`. Elas somente registram eventos se uma ferramenta que crie esse objeto for instalada posteriormente. O código atual não instala nem carrega essa ferramenta.

O provedor de hospedagem, CDN, DNS e segurança ainda precisa ser confirmado. Esses serviços podem manter registros técnicos como endereço IP, data, horário, user-agent e logs de acesso.

## Terceiros e compartilhamentos

### Confirmado tecnicamente

- WhatsApp: recebe os dados somente quando o visitante confirma e envia a mensagem na plataforma.
- Meta: fornece a plataforma WhatsApp e pode tratar dados conforme seus próprios termos e políticas.

### Precisa de confirmação operacional

- Agência AK7 DigitalHub.
- Contabilidade, jurídico e outros prestadores.

### Confirmado pela INFINICOM

- Os contatos recebidos são registrados em planilha e CRM.
- Os dados dos leads não são compartilhados com a Vivo.
- Os dados dos leads não são compartilhados com consultores ou parceiros.
- Os fornecedores da planilha e do CRM ainda não foram definidos. A identificação foi adiada e deverá ser concluída antes da adoção efetiva dessas ferramentas, pois elas poderão atuar como prestadoras de tecnologia no tratamento.

## Hospedagem confirmada

- Provedor: HostGator Brasil.
- Papel contratual informado pela documentação do provedor: operadora de dados pessoais no contexto da prestação da hospedagem, enquanto a INFINICOM permanece como controladora.
- Finalidades: disponibilização do site, operação da infraestrutura, segurança, estabilidade, suporte e diagnóstico técnico.
- Dados técnicos potencialmente tratados: endereço IP, data e horário de acesso, user-agent, requisições, eventos de segurança e registros necessários à operação.
- Plano, localização do servidor, política específica de logs e prazo de retenção técnica: devem ser confirmados após a contratação e configuração da hospedagem.

Referência contratual consultada: https://www.hostgator.com.br/termos-de-servico

## Analytics e publicidade confirmados para o lançamento

- Google Tag Manager.
- Google Analytics.
- Google Ads.
- Meta Pixel.

### Arquitetura de consentimento definida

- Contêiner confirmado: Google Tag Manager `GTM-5Z2SX62K`.
- Propriedade confirmada: Google Analytics 4 `G-7PC3DVRBPP`.
- Google Tag Manager será o gerenciador central das tags.
- Google Analytics será classificado na categoria Análise.
- Google Ads e Meta Pixel serão classificados na categoria Publicidade.
- Categorias não essenciais permanecerão desativadas por padrão.
- O primeiro nível do banner oferecerá Aceitar todos, Rejeitar não essenciais e Personalizar.
- O visitante poderá alterar ou revogar suas escolhas por um link permanente no footer.
- O site implementará Google Consent Mode V2 com `analytics_storage`, `ad_storage`, `ad_user_data` e `ad_personalization` negados por padrão.
- O Meta Pixel não poderá disparar sem consentimento para Publicidade.
- As demais tags não deverão ser instaladas diretamente no código para evitar duplicidade fora do controle do Google Tag Manager.

As escolhas serão mantidas no cookie estritamente necessário `infinicom_consent_v1` por 180 dias.

## Política de retenção aprovada

- Leads e solicitações sem contratação: 12 meses após a última interação.
- Solicitações eliminadas pelo titular: exclusão após a validação do pedido, ressalvadas as hipóteses legais de conservação.
- Registros que resultem em contratação: migração para a categoria de cliente e conservação conforme as obrigações contratuais, fiscais, regulatórias e os prazos aplicáveis à defesa de direitos.

O prazo de 12 meses foi aprovado pela INFINICOM em 18/08/2026. A expiração deve ser aplicada tanto ao CRM quanto à planilha e às cópias de trabalho sob controle da empresa.

## Identificação confirmada do controlador

- Razão social: INFINICOM LTDA.
- CNPJ: 58.684.626/0001-44.
- Endereço: Rua Vicente Risola, 456, Santa Inês, Belo Horizonte, MG, CEP 31080-160.
- Canal para solicitações de titulares: admin@infinicom.com.br.
- Responsável pelo canal de privacidade: André Souza, responsável pela empresa.

André Souza foi informado como responsável por responder às solicitações. O projeto não o apresenta como encarregado pelo tratamento de dados enquanto essa designação formal não for confirmada.

## Decisões necessárias

1. Configurar o Google Analytics `G-7PC3DVRBPP` no contêiner `GTM-5Z2SX62K`.
2. Obter os IDs do Google Ads e Meta Pixel e configurar as tags no mesmo contêiner.
3. Definir o papel da AK7 DigitalHub no tratamento de dados.
4. Confirmar se haverá designação formal de encarregado ou aplicação de eventual dispensa.
5. Confirmar plano, localização do servidor e política de logs após a contratação da HostGator.
6. Identificar os fornecedores da planilha e do CRM antes da adoção efetiva.
7. Validar as bases legais e o texto final com assessoria jurídica.

## Referências oficiais

- Lei Geral de Proteção de Dados Pessoais: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm
- Direitos dos titulares: https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados-1/direito-dos-titulares
- Guia de Cookies e Proteção de Dados Pessoais: https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-cookies-e-protecao-de-dados-pessoais.pdf
- Orientações sobre encarregado e canal do titular: https://www.gov.br/anpd/pt-br/canais_atendimento/cidadao-titular-de-dados/denuncia-peticao-de-titular-referente-lgpd
