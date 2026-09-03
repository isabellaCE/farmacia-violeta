# client-template-arrumasite

Template base para os sites de clientes da ArrumaSite. Site estático em
**HTML, CSS e JavaScript puro**, sem build e sem dependências.

## Antes de começar: é este o caminho?

A ArrumaSite tem dois caminhos, e quem decide é o **tamanho do site**.

| | Quando usar | Exemplos |
|---|---|---|
| **Este template** | Landing page única ou site de poucas rotas, com conteúdo estável | `globo-pan-doces`, `lumelight` |
| **Nuxt 3 + Vue 3 + TS + SCSS** | Site grande: mais de umas dez rotas, catálogo, blog, ou muitas páginas de template idêntico | `personalize-agua`, `hiperpack`, `muralha`, `jucelblocos` |

O sinal mais claro de que o site passou do ponto: **você querer um gerador ou um
script de build só para não repetir cabeçalho e rodapé em vários arquivos.** Se
precisa furar a regra da stack para o site caber aqui, ele não cabe.

Existe uma exceção que não é de tamanho: manter o padrão de um cliente irmão. O
`personalize-brinde` tem quatro páginas e é Nuxt porque é do mesmo dono do
`personalize-agua`.

Na dúvida, comece por aqui. Migrar deste template para Nuxt depois é tranquilo.
A seção 2 do [AGENTS.md](AGENTS.md) detalha a decisão.

## Como usar

1. Crie um repositório novo a partir deste template (ou clone e troque o remote).
2. Abra `index.html` no navegador. Para recarregar automático, use uma extensão
   de "Live Server" ou rode `npx serve` na pasta.
3. Dê a cara do cliente: edite os tokens em `:root` no `css/styles.css`, troque
   o logo, o favicon e os textos.

## Estrutura

```
index.html        Página do cliente
css/styles.css    Estilos (tokens de tema no topo, em :root)
js/main.js        JavaScript mínimo (menu mobile, ano do rodapé)
assets/           Imagens, ícones e fontes
AGENTS.md         Guia completo. Leia antes de implementar, é a fonte da verdade
```

## Para implementar com IA

O **[AGENTS.md](AGENTS.md)** descreve a escolha de stack, a lógica de estrutura,
as convenções e o tom de texto. Ferramentas de IA que leem `AGENTS.md` (como o
Claude Code) já pegam essas regras automaticamente.

Peça sempre que a IA avalie a seção 2 antes de escrever a primeira linha: é lá
que se decide se o cliente fica neste template ou vai para Nuxt.

## Deploy

Arquivos estáticos, publicável no GitHub Pages. No futuro, cada cliente será
integrado ao site principal em `arrumasite.com/cliente`.
