# Portfolio — Davi Guimarães da Costa

Site portfólio/currículo pessoal construído com Astro 4, Tailwind CSS e TypeScript.

**Stack:** Astro · Tailwind CSS · TypeScript · Content Collections · Zod  
**Deploy:** Cloudflare Pages

---

## Início rápido

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento (http://localhost:4321)
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

---

## Como adicionar um novo projeto

Não é necessário alterar nenhum código. Basta criar um arquivo Markdown em `src/content/projects/`.

### Passo a passo

1. Crie o arquivo `src/content/projects/nome-do-projeto.md`
2. O slug/URL será gerado automaticamente a partir do nome do arquivo (`nome-do-projeto` → `/projetos/nome-do-projeto`)
3. Preencha o frontmatter com os campos obrigatórios (veja schema abaixo)
4. Escreva a descrição detalhada no corpo do arquivo em Markdown
5. (Opcional) Adicione screenshots em `public/images/projetos/nome-do-projeto/`
6. Faça commit e push — o Cloudflare Pages faz o deploy automaticamente

O Astro gera a rota `/projetos/nome-do-projeto` automaticamente via `getStaticPaths`. Nenhum código precisa ser alterado.

### Exemplo de arquivo de projeto

```markdown
---
title: "Meu Projeto"
status: "finalizado"
shortDescription: "Descrição curta para o card (máx 160 chars)."
description: "Descrição longa usada na página do projeto."
stack: ["Python", "Flask", "SQLite"]
githubUrl: "https://github.com/Guimaraes-Davi/meu-projeto"
liveUrl: "https://meu-projeto.onrender.com"
embeddable: false
privateProject: false
featured: true
startDate: 2024-01-01
endDate: 2024-03-01
tags: ["web", "python"]
---

## Sobre o Projeto

Descrição detalhada em Markdown...
```

**Nota importante:** O campo `slug` NÃO deve ser incluído no frontmatter — o Astro gera o slug automaticamente a partir do nome do arquivo. O arquivo `meu-projeto.md` gera a rota `/projetos/meu-projeto`.

---

## Schema Zod — Collection `projects`

Localização: `src/content/config.ts`

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `title` | `string` | Sim | Nome do projeto |
| `status` | `"finalizado" \| "em-andamento" \| "futuro"` | Sim | Status atual |
| `shortDescription` | `string` (máx 160) | Sim | Texto do card |
| `description` | `string` | Sim | Texto curto de metadado |
| `stack` | `string[]` | Sim | Tecnologias usadas |
| `featured` | `boolean` | Sim | Aparece primeiro no grid |
| `privateProject` | `boolean` | Não | Exibe badge "Projeto Privado" na página |
| `startDate` | `date` | Sim | Data de início |
| `githubUrl` | `string` | Não | Link do repositório |
| `liveUrl` | `string` | Não | Link do deploy |
| `embedUrl` | `string` | Não | URL para iframe |
| `embeddable` | `boolean` | Não | Habilita iframe na página |
| `coverImage` | `string` | Não | Path da imagem de capa |
| `screenshots` | `string[]` | Não | Paths das screenshots |
| `endDate` | `date` | Não | Data de conclusão |
| `tags` | `string[]` | Não | Tags de filtragem |

---

## Como marcar um projeto como privado

Adicione `privateProject: true` no frontmatter:

```yaml
privateProject: true
```

Isso exibe o badge "Projeto Privado" na página do projeto e um ícone de cadeado no card. Não oculta o projeto — apenas sinaliza que o código ou lógica interna não é pública.

---

## Como ativar/desativar iframe embed

### Ativar embed (projeto com deploy no Render)

```yaml
embeddable: true
embedUrl: "https://meu-projeto.onrender.com"
```

A página exibirá um iframe responsivo com aviso de cold start do Render.

### Desativar embed

```yaml
embeddable: false
```

A página exibirá screenshots (se `screenshots` estiver preenchido) ou um placeholder visual.

**Use `embeddable: false` para projetos com:**
- WebSocket (Socket.io) — iframes não suportam bem
- CSP/CORS restritivos
- Cold start muito longo (>30s)

---

## Configurações do site

Edite `src/config.ts` para atualizar dados pessoais:

- `SITE.url` — URL de produção (após o primeiro deploy)
- `CONTACT.email` — seu email
- `CONTACT.phone` — seu telefone
- `CONTACT.githubUrl` / `CONTACT.githubUsername` — GitHub
- `CONTACT.linkedinUrl` / `CONTACT.linkedinUsername` — LinkedIn

---

## Deploy no Cloudflare Pages

### Passo a passo

1. Faça push do repositório para o GitHub
2. Acesse [Cloudflare Pages](https://pages.cloudflare.com)
3. Clique em **Create a project** → **Connect to Git**
4. Selecione o repositório
5. Configure o build:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variable:** `NODE_VERSION = 18`
6. Clique em **Save and Deploy**

Após o primeiro deploy, atualize `site` em `astro.config.mjs` e `SITE.url` em `src/config.ts` com a URL gerada pelo Cloudflare.

### Deploys automáticos

Todo `git push` para a branch principal dispara um novo deploy automaticamente.

---

## Estrutura de arquivos

```
portfolio-davi/
├── astro.config.mjs          # Config do Astro
├── tailwind.config.mjs       # Config do Tailwind
├── tsconfig.json             # TypeScript strict
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/projetos/      # Screenshots dos projetos
├── src/
│   ├── config.ts             # Dados do site (nome, email, social)
│   ├── content/
│   │   ├── config.ts         # Schema Zod (adicionar campos aqui)
│   │   └── projects/         # Arquivos .md dos projetos
│   ├── components/           # Componentes Astro
│   │   ├── Icon.astro        # Ícones Lucide inline
│   │   └── ...
│   ├── layouts/
│   │   └── BaseLayout.astro  # Layout base com SEO completo
│   ├── pages/
│   │   ├── index.astro       # Landing page
│   │   └── projetos/
│   │       ├── index.astro   # Listagem de projetos
│   │       └── [slug].astro  # Página individual (gerada estaticamente)
│   ├── styles/
│   │   └── global.css        # CSS global + variáveis de tema
│   └── utils/
│       └── projects.ts       # Helpers para Content Collections
└── README.md
```
