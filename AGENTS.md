# Guia para IA, template de site de cliente da ArrumaSite

Este arquivo é a fonte da verdade para qualquer pessoa ou IA que for criar um
site de cliente a partir deste template. Leia tudo antes de começar e siga à
risca. O objetivo é manter os sites consistentes, leves e fáceis de manter, sem
fugir do combinado.

## 1. O que é este template

- Ponto de partida para os sites de clientes da ArrumaSite.
- Cada cliente vive no seu próprio repositório, criado a partir deste template.
- É um site estático: abre direto no navegador, sem servidor e sem build.

## 2. Antes de tudo: este template é o caminho certo para este cliente?

A ArrumaSite tem **dois caminhos**, e o critério que decide é o **tamanho do
site**.

### Caminho 1, o padrão: este template, HTML, CSS e JS puro

É a escolha inicial. Vale para landing page única e para site de poucas rotas,
com conteúdo estável. Foi assim que nasceram `globo-pan-doces` e `lumelight`.

### Caminho 2, a exceção: Nuxt 3 + Vue 3 + TypeScript + SCSS

Use quando **o site for grande ou complexo**, no padrão de `personalize-agua`,
`hiperpack`, `muralha` e `jucelblocos`. Os sinais de que o site passou do ponto:

- passa de umas dez rotas;
- tem catálogo, blog ou qualquer seção que cresce com o tempo;
- tem várias páginas de template idêntico, como uma por produto;
- **você se pegou querendo um gerador ou um script de build para não repetir
  cabeçalho e rodapé em vários arquivos.** Esse último é o sinal mais claro:
  se precisa furar a regra da seção 3 para o site caber aqui, o site não cabe.

Há ainda uma exceção que não é de tamanho: **manter o padrão de um cliente
irmão**. O `personalize-brinde` tem quatro páginas e mesmo assim é Nuxt, porque
é do mesmo dono do `personalize-agua` e os dois são mantidos juntos. Fora um
caso assim, vale o tamanho.

Escolher errado custa caro nos dois sentidos. Nuxt num site de três páginas é
peso morto: `node_modules`, lockfile para envelhecer e build para rodar. HTML
puro num catálogo vira dezenas de arquivos quase iguais que precisam mudar
juntos. **Na dúvida, comece por aqui**: migrar deste template para Nuxt depois é
tranquilo, porque o conteúdo já está separado do layout.

## 3. Stack e regras de tecnologia (inegociável neste caminho)

- **HTML5 semântico**, **CSS puro** e **JavaScript vanilla**. Nada além disso.
- **Proibido:** frameworks (React, Vue, Tailwind, Bootstrap), build tools
  (Vite, Webpack, npm), pré-processadores (Sass, Less) e dependências externas.
- **Sem CDN de framework.** Biblioteca de terceiros só em caso raro e bem
  justificado, e ainda assim baixada para o repositório, nunca via CDN externo.
- Fontes: prefira a fonte do sistema, que já vem configurada. Se a marca pedir
  uma fonte específica, baixe os arquivos para `assets/` e use `@font-face`.
- Tudo precisa funcionar como arquivo estático no GitHub Pages.

Motivo: simplicidade, leveza, carregamento rápido e manutenção sem dor de
cabeça, por qualquer pessoa, daqui a muito tempo.

Se alguma dessas regras começar a atrapalhar em vez de ajudar, releia a seção 2:
provavelmente o site é do caminho 2.

## 4. Estrutura de arquivos

```
index.html        Página do cliente.
css/styles.css    Estilos. Os tokens de tema ficam no topo, em :root.
js/main.js        JavaScript (menu mobile, ano do rodapé). Mantenha enxuto.
assets/           Imagens, ícones e fontes do cliente.
favicon.svg       Favicon placeholder. Troque pelo do cliente.
AGENTS.md         Este guia.
README.md         Resumo rápido para humanos.
```

Para sites com mais de uma página, crie `sobre.html`, `contato.html` e afins na
raiz, reaproveitando o mesmo `css/` e `js/`.

## 5. Como dar a cara do cliente (tematização)

Quase toda a identidade visual sai de um lugar só: o bloco `:root` no começo de
`css/styles.css`. Ajuste as variáveis:

- `--cor-fundo`, `--cor-texto`, `--cor-texto-suave`
- `--cor-acento` e `--cor-acento-escuro` (a cor principal da marca)
- `--cor-borda`
- `--fonte-texto`, `--fonte-titulo`
- `--largura-max`, `--espaco-secao`, `--raio`

Troque também o logo ou nome no cabeçalho, o favicon e os textos. Não saia
espalhando cores fixas pelo CSS: use sempre as variáveis.

## 6. Lógica de estrutura da página

Não existe estrutura obrigatória. Cada cliente pede um conjunto diferente de
seções. Monte a partir destes blocos, na ordem que fizer sentido para o negócio:

- **Cabeçalho** com nome ou logo e navegação. Já vem pronto.
- **Seções de conteúdo:** escolha conforme o cliente. Exemplos comuns:
  apresentação, sobre, serviços ou produtos, galeria ou portfólio, depoimentos,
  perguntas frequentes, localização e mapa.
- **Contato** com botão de WhatsApp e e-mail.
- **Rodapé** com contatos, direitos autorais e o crédito da ArrumaSite.

Padrão de cada seção:

```html
<section id="sobre" class="section">
  <div class="container">
    <h2 class="section__title">Título</h2>
    <p class="section__text">Texto.</p>
  </div>
</section>
```

Use `class="container"` para alinhar o conteúdo e `class="section"` para o
espaçamento vertical. Reaproveite `.btn` nas chamadas de ação.

## 7. Rodapé: crédito obrigatório

Todo site de cliente mantém o crédito da ArrumaSite no rodapé, com link para
`https://arrumasite.com`:

```html
<a class="site-footer__credit" href="https://arrumasite.com" target="_blank" rel="noopener">
  Desenvolvido por <strong>ArrumaSite</strong>
</a>
```

## 8. Convenções de código

- HTML: tags semânticas (`header`, `nav`, `main`, `section`, `footer`),
  hierarquia de títulos correta (um `h1` por página) e `alt` em toda imagem.
- CSS: mobile-first, classes em kebab-case no estilo BEM
  (`bloco__elemento--modificador`). Comente em português.
- JS: vanilla, sem dependências, dentro de um IIFE. Só o necessário.
- Acessibilidade: bom contraste, foco visível, `aria-*` onde precisar,
  navegação por teclado funcionando e link de pular para o conteúdo.
- SEO: `title` e `meta description` reais, tags Open Graph, `lang="pt-BR"`,
  favicon e títulos bem hierarquizados.

## 9. Texto e tom (português)

- Português natural, direto e humano. Sem jargão técnico.
- **Não use travessões nem hífens como conector de frase.** Prefira vírgula,
  ponto e dois pontos. Hífen em palavra composta, como "e-mail", está ok.
- Escreva como gente, não como robô.

## 10. Evite a "cara de site feito por IA"

- Nada de gradiente roxo ou azul genérico, vidro fosco em tudo, três cards
  iguais com sombra, nem emoji no lugar de ícone.
- Prefira: layout com personalidade e respiro, ícones SVG próprios, tipografia
  com caráter, uma paleta enxuta e intencional, e fotos reais bem tratadas, sem
  aquela cara de banco de imagem.

## 11. Performance

- Otimize as imagens antes de subir (dimensão certa, WebP quando der).
- Use `loading="lazy"` nas imagens abaixo da dobra.
- Mantenha CSS e JS enxutos, sem código morto.

## 12. Checklist antes de entregar

- [ ] Abre sem erros no console.
- [ ] Responsivo de 320px até desktop.
- [ ] `title`, `meta description` e Open Graph preenchidos.
- [ ] Favicon trocado.
- [ ] Cores, fonte e logo do cliente aplicados via `:root`.
- [ ] Imagens otimizadas e com `alt`.
- [ ] Texto revisado, em português natural, sem travessões.
- [ ] Acessível: teclado, foco e contraste.
- [ ] Crédito "Desenvolvido por ArrumaSite" no rodapé.

## 13. Modelo de pedido para uma IA

> Crie o site do cliente **[NOME]**, do ramo **[RAMO]**, a partir deste template.
> Use só HTML, CSS e JS puro, seguindo este AGENTS.md. Identidade: cor principal
> **[COR]**, tom **[formal ou descontraído]**. Seções: **[liste as seções]**.
> Contato: WhatsApp **[NÚMERO]** e e-mail **[E-MAIL]**. Mantenha o crédito da
> ArrumaSite no rodapé. Capriche para não ficar com cara de site feito por IA.
