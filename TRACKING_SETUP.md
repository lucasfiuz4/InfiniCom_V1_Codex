# Configuração de tracking e consentimento

## Contêiner instalado

- Google Tag Manager: `GTM-5Z2SX62K`
- Google Analytics 4: `G-7PC3DVRBPP`
- Google Ads: `AW-18397424069`
- Variáveis de ambiente: `PUBLIC_GTM_ID`, `PUBLIC_GOOGLE_TAG_ID` e `PUBLIC_GOOGLE_ADS_ID`

Google Analytics e Google Ads são destinos da mesma Google tag, carregada uma única vez nos layouts institucional e de landing pages. O GTM permanece disponível para Meta Pixel e integrações futuras. Antes dessas integrações, o site define os estados do Google Consent Mode V2 como negados para Análise e Publicidade, salvo quando existe uma preferência válida já registrada.

## Restrição por domínio

- O carregamento de GA4, Google Ads e GTM é autorizado somente em `infinicom.com.br` e `www.infinicom.com.br`.
- Em `localhost`, ambientes de preview e cópias hospedadas em outros domínios, nenhuma biblioteca de tracking é carregada e nenhum evento de WhatsApp é enviado.
- O iframe `noscript` do GTM não é utilizado, pois uma página estática sem JavaScript não consegue validar o hostname antes de carregar esse recurso.
- Essa barreira reduz cópias acidentais e o reaproveitamento integral do código. Os identificadores executados no navegador continuam sendo públicos por natureza; proteção contra envio deliberadamente forjado exige coleta server-side com validação.

## Categorias

### Necessários

- Registro `infinicom_consent_v1`.
- Finalidade: lembrar as escolhas de privacidade.
- Duração: 180 dias.
- Sempre ativo.

### Análise

- Google Analytics.
- Só pode usar armazenamento quando `analytics_storage` estiver concedido.

### Publicidade

- Google Ads.
- Meta Pixel permanece planejado e não está instalado.
- Só pode disparar quando o consentimento de Publicidade estiver concedido.

## Configuração do Google Analytics

- A Google tag `G-7PC3DVRBPP` já está instalada diretamente no código compartilhado por todas as páginas.
- O destino Google Ads `AW-18397424069` é configurado na mesma tag, sem carregar um segundo `gtag.js`.
- Não criar outra tag com esse ID dentro do GTM, pois isso duplicaria pageviews e eventos.
- A tag usa o `dataLayer` existente e recebe os estados do Consent Mode V2 antes da configuração do GA4.

## Configuração obrigatória no Google Tag Manager

1. Criar variáveis da camada de dados:
   - `consent_analytics`
   - `consent_marketing`
2. Não cadastrar novamente `AW-18397424069` ou `G-7PC3DVRBPP` no GTM.
3. Configurar o Meta Pixel quando o identificador oficial estiver disponível.
4. Para integrações de Google Ads no GTM, exigir `ad_storage`, `ad_user_data` e `ad_personalization`.
5. Para Meta Pixel, adicionar condição para `consent_marketing` igual a `true`.
6. Não enviar nome, telefone, e-mail, mensagem ou outros dados dos formulários para a camada de dados.

## Conversão de WhatsApp no Google Ads

O ID `AW-18397424069` ativa o destino Google Ads, mas não identifica sozinho uma ação de conversão. Para medir `whatsapp_click` como conversão direta, ainda é necessário obter no Google Ads o rótulo da ação, no formato `AW-18397424069/ROTULO`. Como alternativa, vincular GA4 e Google Ads e importar o evento principal `whatsapp_click` como conversão.

## Eventos existentes

- `contact_intent_selected`
- `contact_whatsapp_submit`
- `lp_whatsapp_submit`
- `whatsapp_click`
- `infinicom_consent_default`
- `infinicom_consent_update`

Os eventos comerciais existentes enviam somente contexto da interação, produto, intenção e origem de campanha. Dados pessoais preenchidos nos formulários não devem ser adicionados ao GTM.

`whatsapp_click` é enviado diretamente pela Google tag em todos os links de WhatsApp e nos redirecionamentos dos formulários. Seus parâmetros são `cta_location`, `cta_type`, `product` e `page_path`. Não criar outra tag GA4 para esse evento no GTM, evitando contagem duplicada. O GTM poderá usar o evento como acionador futuro de Google Ads ou Meta Pixel, sempre respeitando o consentimento de Publicidade.

## Validação antes da publicação

- Testar Aceitar todos.
- Testar Rejeitar não essenciais.
- Testar seleção apenas de Análise.
- Testar seleção apenas de Publicidade.
- Testar revogação pelo link Gerenciar cookies.
- Confirmar que o Meta Pixel não dispara sem Publicidade.
- Confirmar que as tags Google respeitam o Consent Mode V2.
- Confirmar no Tag Assistant que existe apenas uma Google tag `G-7PC3DVRBPP`.
- Validar com o modo Preview do GTM e o Tag Assistant.
- Conferir cookies no navegador antes e depois de cada escolha.

## Referências

- Google Consent Mode: https://developers.google.com/tag-platform/security/guides/consent
- Consentimento no GTM: https://support.google.com/tagmanager/answer/10718549
- Guia de Cookies da ANPD: https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-cookies-e-protecao-de-dados-pessoais.pdf
