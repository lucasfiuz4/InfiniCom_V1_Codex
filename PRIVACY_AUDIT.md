# Inventário de privacidade e cookies

Última revisão técnica: 21/08/2026

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
→ o navegador abre um endereço do WhatsApp contendo a mensagem preparada
→ WhatsApp/Meta passa a tratar os dados incluídos no redirecionamento
→ o visitante confirma o envio da mensagem para a INFINICOM
→ a equipe INFINICOM continua o atendimento
```

O projeto não possui backend, API de leads ou banco de dados. Antes do redirecionamento, os dados permanecem no navegador. Ao abrir o endereço com o texto preparado, as informações passam a ser tratadas pelo WhatsApp/Meta. A equipe INFINICOM recebe a mensagem apenas quando o visitante confirma o envio na plataforma.

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

As finalidades, bases legais e regras de retenção foram consolidadas nas minutas públicas de Privacidade e Cookies. A redação permanece sujeita à validação jurídica final da INFINICOM.

## Tecnologias de armazenamento e rastreamento

Na versão atual, foram implementados:

- Cookie necessário `infinicom_consent_v1`, com duração de 180 dias, para registrar as preferências do visitante.
- Google Consent Mode V2 com categorias não essenciais negadas por padrão.
- Google Analytics 4 pela Google tag `G-7PC3DVRBPP`.
- Google Tag Manager pelo contêiner `GTM-5Z2SX62K`.
- Eventos de interação sem envio dos dados pessoais preenchidos nos formulários.

Não foram implementados `localStorage`, `sessionStorage`, Microsoft Clarity, PostHog ou Meta Pixel. Google Ads está ativo como destino `AW-18397424069` da Google tag e respeita os estados de Publicidade do Consent Mode V2.

O site está hospedado na HostGator. CDN, DNS, localização do servidor e política detalhada de logs ainda devem ser confirmados, pois esses serviços podem manter registros técnicos como endereço IP, data, horário, user-agent e logs de acesso.

## Terceiros e compartilhamentos

### Confirmado tecnicamente

- WhatsApp: recebe os dados incluídos no endereço de redirecionamento quando a plataforma é aberta; a equipe INFINICOM só recebe a mensagem após a confirmação do envio.
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

## Analytics e publicidade ativos

- Google Tag Manager.
- Google Analytics.
- Google Ads.

Meta Pixel permanece planejado, mas não está instalado. Sua futura ativação exigirá atualização da Política de Cookies, do inventário e do banner de consentimento.

### Arquitetura de consentimento definida

- Contêiner confirmado: Google Tag Manager `GTM-5Z2SX62K`.
- Propriedade confirmada: Google Analytics 4 `G-7PC3DVRBPP`.
- Destino confirmado: Google Ads `AW-18397424069`.
- Google Analytics e Google Ads são destinos da mesma Google tag compartilhada entre todas as páginas.
- Google Tag Manager permanecerá disponível para Meta Pixel e integrações futuras.
- Google Analytics será classificado na categoria Análise.
- Google Ads e Meta Pixel serão classificados na categoria Publicidade.
- Categorias não essenciais permanecerão desativadas por padrão.
- O primeiro nível do banner oferecerá Aceitar todos, Rejeitar não essenciais e Personalizar.
- O visitante poderá alterar ou revogar suas escolhas por um link permanente no footer.
- O site implementará Google Consent Mode V2 com `analytics_storage`, `ad_storage`, `ad_user_data` e `ad_personalization` negados por padrão.
- O Meta Pixel não poderá disparar sem consentimento para Publicidade.
- Não devem ser criadas configurações manuais adicionais de `G-7PC3DVRBPP` ou `AW-18397424069` no GTM, evitando duplicidade de pageviews e eventos.

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

## Políticas públicas

- Política de Privacidade: minuta técnica completa, versão 1.0, atualizada em 21/08/2026.
- Política de Cookies: minuta técnica completa, versão 1.0, atualizada em 21/08/2026.
- As duas páginas refletem o fluxo atual do site, os fornecedores confirmados, a retenção aprovada e as preferências do Consent Mode V2.
- A publicação como documento definitivo depende de validação jurídica profissional e aprovação formal da INFINICOM.

## Decisões necessárias

1. Validar e aprovar formalmente as minutas de Privacidade e Cookies com assessoria jurídica.
2. Obter o rótulo da conversão de WhatsApp no Google Ads, ou importar `whatsapp_click` do GA4.
3. Obter o ID do Meta Pixel e atualizar políticas e consentimento antes de sua instalação.
4. Definir o papel da AK7 DigitalHub no tratamento de dados.
5. Confirmar o enquadramento como agente de tratamento de pequeno porte e eventual dispensa de encarregado.
6. Confirmar plano, localização do servidor e política de logs da HostGator.
7. Identificar os fornecedores da planilha e do CRM antes da adoção efetiva.

## Referências oficiais

- Lei Geral de Proteção de Dados Pessoais: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm
- Direitos dos titulares: https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados-1/direito-dos-titulares
- Guia de Cookies e Proteção de Dados Pessoais: https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-cookies-e-protecao-de-dados-pessoais.pdf
- Orientações sobre encarregado e canal do titular: https://www.gov.br/anpd/pt-br/canais_atendimento/cidadao-titular-de-dados/denuncia-peticao-de-titular-referente-lgpd
