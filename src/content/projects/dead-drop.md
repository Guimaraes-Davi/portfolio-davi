---
title: "Dead Drop"
status: "finalizado"
shortDescription: "Serviço de mensagens criptografadas com autodestruição após leitura. Inspirado nas técnicas de espionagem clássica."
description: "Serviço web onde o usuário escreve uma mensagem, recebe um código único e compartilha com o destinatário. A mensagem é criptografada com AES-256-CBC e destruída permanentemente após a primeira leitura."
stack: ["Node.js", "Express", "SQLite", "JWT", "AES-256", "bcrypt"]
githubUrl: "https://github.com/Guimaraes-Davi/dead-drop"
liveUrl: "https://dead-drop.onrender.com"
embeddable: true
embedUrl: "https://dead-drop.onrender.com"
featured: true
privateProject: false
startDate: 2024-06-01
endDate: 2024-08-01
tags: ["seguranca", "criptografia", "node"]
---

## Sobre o Projeto

Dead Drop reimagina o conceito de espionagem para o digital: um sistema onde mensagens são deixadas criptografadas e só podem ser lidas por quem tem o código. Após a primeira leitura, a mensagem é destruída permanentemente — acessos posteriores retornam HTTP 410.

## Arquitetura de Segurança

- **AES-256-CBC** — mensagens criptografadas antes de persistir no banco
- **bcrypt** — senhas com hash seguro
- **JWT** — autenticação stateless com expiração curta
- **Autodestruição** — registro deletado após primeira leitura
- **Expiração de anexos** — uploads expiram em 60 segundos
- **Proteção de uploads** — pasta de arquivos não acessível diretamente

## Rotas da API

- `POST /auth/registrar` — Criar conta
- `POST /auth/login` — Login
- `POST /mensagem` — Criar dead drop (autenticação opcional)
- `GET /mensagem/:codigo` — Ler mensagem (autodestrutiva)
- `GET /mensagem/minhas` — Histórico (requer autenticação)

## Fluxo de Uso

1. Remetente cria um drop e recebe um código único
2. Código é compartilhado com o destinatário por canal separado
3. Destinatário acessa o drop e lê a mensagem
4. Registro é deletado imediatamente e acessos futuros retornam 410

## Observações de Produção

Em produção real, uploads devem ser armazenados em AWS S3 ou Cloudflare R2 em vez do sistema de arquivos local. No Render gratuito, o armazenamento local é efêmero e reinicia a cada deploy.

## Como Rodar Localmente

```bash
git clone https://github.com/Guimaraes-Davi/dead-drop
cd dead-drop
npm install
npm start
```

Acesse `http://localhost:3000`.
