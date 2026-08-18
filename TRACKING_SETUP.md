# Configuração de tracking e consentimento

## Contêiner instalado

- Google Tag Manager: `GTM-5Z2SX62K`
- Google Analytics 4: `G-7PC3DVRBPP`
- Variável de ambiente: `PUBLIC_GTM_ID`

O contêiner é carregado nos layouts institucional e de landing pages. Antes do GTM, o site define os estados do Google Consent Mode V2 como negados para Análise e Publicidade, salvo quando existe uma preferência válida já registrada.

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
- Meta Pixel.
- Só pode disparar quando o consentimento de Publicidade estiver concedido.

## Configuração obrigatória no Google Tag Manager

1. Criar variáveis da camada de dados:
   - `consent_analytics`
   - `consent_marketing`
2. Criar uma tag Google com o ID `G-7PC3DVRBPP`.
3. Configurar Google Ads com o ID `AW-XXXXXXXXX` e os rótulos de conversão aplicáveis.
4. Configurar o Meta Pixel com o identificador oficial.
5. Não instalar Google Analytics, Google Ads ou Meta Pixel diretamente no código do site.
6. Para Google Analytics, exigir consentimento adicional de `analytics_storage`.
7. Para Google Ads, exigir `ad_storage`, `ad_user_data` e `ad_personalization`.
8. Para Meta Pixel, adicionar condição para `consent_marketing` igual a `true`.
9. Na tag do Google Analytics, configurar dois acionadores:
   - Evento personalizado `infinicom_consent_default`, somente quando `consent_analytics` for igual a `true`.
   - Evento personalizado `infinicom_consent_update`, somente quando `consent_analytics` for igual a `true`.
10. Não adicionar o snippet direto de `gtag.js` ao código, pois o Google Analytics será gerenciado pelo GTM.
11. Não enviar nome, telefone, e-mail, mensagem ou outros dados dos formulários para a camada de dados.

## Eventos existentes

- `contact_intent_selected`
- `contact_whatsapp_submit`
- `lp_whatsapp_submit`
- `infinicom_consent_default`
- `infinicom_consent_update`

Os eventos comerciais existentes enviam somente contexto da interação, produto, intenção e origem de campanha. Dados pessoais preenchidos nos formulários não devem ser adicionados ao GTM.

## Validação antes da publicação

- Testar Aceitar todos.
- Testar Rejeitar não essenciais.
- Testar seleção apenas de Análise.
- Testar seleção apenas de Publicidade.
- Testar revogação pelo link Gerenciar cookies.
- Confirmar que o Meta Pixel não dispara sem Publicidade.
- Confirmar que as tags Google respeitam o Consent Mode V2.
- Validar com o modo Preview do GTM e o Tag Assistant.
- Conferir cookies no navegador antes e depois de cada escolha.

## Referências

- Google Consent Mode: https://developers.google.com/tag-platform/security/guides/consent
- Consentimento no GTM: https://support.google.com/tagmanager/answer/10718549
- Guia de Cookies da ANPD: https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-cookies-e-protecao-de-dados-pessoais.pdf
