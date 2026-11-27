# Caio Azevedo Cardoso

Site estático do portfólio, em português, publicado pelo GitHub Pages em [https://caaz95.github.io/](https://caaz95.github.io/).

A branch `main` é a raiz do site. Não há etapa de build: HTML, CSS e JavaScript puros.

## O que a página tem

- Início, Sobre, Serviços, Portfólio e Contato
- Cartões do portfólio gerados a partir de `js/projects.js`
- Arquivos de cada projeto em `projetos/<slug>/`, com caminho relativo (funciona em `https://caaz95.github.io/`)

Os botões dependem do tipo de arquivo:

| `kind` | Botão | O que acontece |
| --- | --- | --- |
| `demo` | Ver demo | abre o HTML no navegador |
| `pdf` | Ver PDF | abre o PDF no navegador |
| `sheet` | Baixar planilha | faz o download |

`demonstrative: true` mostra a etiqueta **Projeto demonstrativo**. As peças atuais usam dados fictícios.

## Ver localmente

Na raiz do repositório:

```bash
python3 -m http.server 8765
```

Abra [http://127.0.0.1:8765/](http://127.0.0.1:8765/).

## Como adicionar um projeto

1. Crie a pasta `projetos/<slug>/`.
2. Coloque a capa (por exemplo `capa.png`) e os arquivos da entrega (HTML, PDF, XLSX).
3. Abra `js/projects.js` e copie um objeto da lista `projects`.
4. Cole no final da lista e preencha `slug`, `title`, `description`, `cover`, `coverAlt`, `demonstrative` e `links`.
5. Use caminhos relativos à raiz, sem barra no início e sem URL absoluta:

```js
{
  slug: "meu-projeto",
  title: "Título que aparece no cartão",
  description: "Texto do cartão.",
  cover: "projetos/meu-projeto/capa.png",
  coverAlt: "Descrição objetiva da capa, para leitor de tela.",
  demonstrative: false,
  links: [
    { kind: "demo", href: "projetos/meu-projeto/index.html" },
    { kind: "pdf", href: "projetos/meu-projeto/relatorio.pdf" },
    { kind: "sheet", href: "projetos/meu-projeto/memoria.xlsx" }
  ]
}
```

6. Envie para a branch `main`. O GitHub Pages publica a raiz do repositório.

A ordem dos objetos é a ordem dos cartões. Um `label` no link troca o texto do botão, se precisar.

## Contato

No objeto `contact` de `js/projects.js`:

- `github` — perfil já preenchido (`https://github.com/caaz95`). O mesmo endereço está no HTML, para a página funcionar sem JavaScript. Se mudar, atualize os dois.
- `workana` — cole a URL do perfil ou deixe `""` para ocultar.
- `linkedin` — cole a URL do perfil ou deixe `""` para ocultar.

Link vazio não é renderizado. Não coloque telefone, e-mail ou outros contatos que não estejam nesse objeto.

## Arquivos

- `index.html` — página
- `css/styles.css` — estilo
- `js/projects.js` — projetos e contatos editáveis
- `js/main.js` — desenha os cartões e os links opcionais
- `projetos/` — capas e entregas
- `assets/` — ícone, imagem de compartilhamento e fontes (Fraunces e Source Sans 3, licença OFL)
