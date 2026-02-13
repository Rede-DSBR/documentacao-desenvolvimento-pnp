# Documentacao de Desenvolvimento PNP

Documentacao dos produtos e servicos de Design realizados no projeto Plataforma Nilo Pecanha (PNP).

Site gerado com [Jekyll](https://jekyllrb.com/) e publicado via GitHub Pages.

---

## Estrutura do projeto

```
docs/
├── _config.yml                  # Configuracoes do Jekyll (titulo, url, baseurl)
├── _layouts/default.html        # Layout principal (header + sidebar + conteudo + paginacao)
├── _includes/                   # Componentes reutilizaveis (header, sidebar, footer, etc.)
├── _data/
│   └── menu.yml                 # Menu lateral (controla sidebar e paginacao)
├── assets/
│   ├── css/style.css            # Estilos do site
│   └── js/site.js               # JavaScript (menu mobile, pastas colapsaveis)
├── documentacao/
│   ├── etapa1/                  # 1a Etapa (2022-2023)
│   │   ├── design_grafico/      # A. Design grafico, digital e de sistemas
│   │   ├── comunicacao_visual/  # B. Comunicacao visual, midias digitais, UX e conteudo
│   │   ├── audiovisual/         # C. Producao audiovisual, narrativa e animacao
│   │   └── continuidade_2023/   # D. Continuidade e aprimoramentos em 2023
│   ├── etapa2/                  # 2a Etapa (2024)
│   │   ├── design_grafico/
│   │   └── comunicacao_eventos/
│   └── etapa3/                  # 3a Etapa (2025)
│       ├── design_grafico/
│       ├── comunicacao_visual/
│       └── branding_eventos/
├── index.html                   # Pagina inicial
├── busca.html                   # Pagina de busca
└── 404.html                     # Pagina de erro
```

---

## Como editar uma pagina existente

1. Localize o arquivo `.md` dentro de `docs/documentacao/`. Os arquivos sao numerados (`01.md`, `02.md`, etc.) e organizados por etapa e secao.

2. Abra o arquivo e edite o conteudo abaixo do cabecalho (front matter). O cabecalho e a parte entre `---`:

```markdown
---
layout: default
title: "Titulo da pagina"
---

# {{ page.title }}

Seu conteudo aqui em Markdown.
```

3. Voce pode usar toda a sintaxe Markdown:

```markdown
## Subtitulo

Texto normal com **negrito** e *italico*.

- Item de lista
- Outro item

> Citacao em bloco

| Coluna 1 | Coluna 2 |
|-----------|----------|
| Dado 1    | Dado 2   |

![descricao da imagem](caminho/da/imagem.png)
```

4. **Nao altere** o `layout: default` nem o `# {{ page.title }}` (ele puxa o titulo automaticamente do front matter).

---

## Como adicionar uma nova pagina

Sao necessarios **dois passos**:

### Passo 1: Criar o arquivo `.md`

Crie o arquivo na pasta correta com o proximo numero da sequencia. Por exemplo, se a pasta `docs/documentacao/etapa1/design_grafico/` ja tem arquivos ate `10.md`, crie o `11.md`:

```markdown
---
layout: default
title: "Titulo do novo item"
---

# {{ page.title }}

Descricao do novo item aqui.
```

### Passo 2: Adicionar ao menu

Abra `docs/_data/menu.yml` e adicione uma entrada na secao correspondente:

```yaml
          - title: "Titulo do novo item"
            href: "/documentacao/etapa1/design_grafico/11"
            icon: "fas fa-file-alt"
```

**Importante:**
- O `href` deve corresponder ao caminho do arquivo sem a extensao `.md`
- A indentacao no YAML deve ser exata (use espacos, nunca tabs)
- A posicao no `menu.yml` define a ordem no menu lateral e na paginacao (anterior/proximo)

---

## Como adicionar uma nova secao

Para criar uma secao nova (por exemplo, uma nova sub-area dentro de uma etapa):

1. Crie a pasta em `docs/documentacao/` (ex: `docs/documentacao/etapa1/nova_secao/`)

2. Crie os arquivos `.md` dentro dela (`01.md`, `02.md`, etc.)

3. No `menu.yml`, adicione a nova secao como `children` dentro da etapa correspondente:

```yaml
      - title: "Nome da nova secao"
        icon: "fas fa-star"
        children:
          - title: "Primeiro item"
            href: "/documentacao/etapa1/nova_secao/01"
            icon: "fas fa-file-alt"
          - title: "Segundo item"
            href: "/documentacao/etapa1/nova_secao/02"
            icon: "fas fa-file-alt"
```

Para icones disponiveis, consulte: https://fontawesome.com/v6/search?m=free&s=solid

---

## Como testar localmente (Windows)

Antes de enviar alteracoes para o GitHub, e recomendado testar o site localmente.

### Pre-requisitos

1. **Ruby** - Baixe e instale em https://rubyinstaller.org/ (versao com DevKit)
2. **Jekyll** - Apos instalar o Ruby, abra um terminal e execute:

```
gem install jekyll bundler
```

3. Verifique a instalacao:

```
jekyll --version
```

### Executando o servidor local

1. Abra um terminal (PowerShell ou CMD) e navegue ate a pasta `docs/` do projeto:

```
cd C:\Users\SeuUsuario\Desktop\dev\documentacao-desenvolvimento-pnp\docs
```

2. Inicie o servidor Jekyll:

```
jekyll serve
```

3. Acesse no navegador: **http://127.0.0.1:4000/documentacao-desenvolvimento-pnp/**

4. O servidor recarrega automaticamente quando voce salva alteracoes nos arquivos.

5. Para parar o servidor, pressione `Ctrl+C` no terminal.

### Observacao sobre baseurl

O site usa `baseurl: "/documentacao-desenvolvimento-pnp"` para funcionar no GitHub Pages. Localmente, a URL completa sera `http://127.0.0.1:4000/documentacao-desenvolvimento-pnp/`.

Se quiser testar sem o subpath, execute:

```
jekyll serve --baseurl ""
```

E acesse diretamente em `http://127.0.0.1:4000/`.

---

## Publicacao

O site e publicado automaticamente via GitHub Actions. Basta fazer `push` na branch `main`:

```
git add .
git commit -m "descricao da alteracao"
git push origin main
```

O deploy leva cerca de 1-2 minutos. Acompanhe em: https://github.com/Rede-DSBR/documentacao-desenvolvimento-pnp/actions
