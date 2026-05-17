---
title: "Nexus Chat"
status: "finalizado"
shortDescription: "Chat em tempo real com criptografia ponta a ponta em conversas privadas usando TweetNaCl."
description: "Nexus Chat implementa criptografia end-to-end real em conversas privadas — as chaves são geradas no navegador do usuário e nem o servidor tem acesso ao conteúdo das mensagens. O servidor atua apenas como retransmissor de bytes cifrados."
stack: ["Node.js", "Express", "Socket.io", "TweetNaCl", "JWT", "SQLite"]
githubUrl: "https://github.com/Guimaraes-Davi/nexus-chat"
liveUrl: "https://nexus-chat-uz53.onrender.com"
embeddable: false
featured: true
privateProject: false
startDate: 2024-09-01
endDate: 2024-11-01
tags: ["seguranca", "websockets", "real-time", "node"]
screenshots:
  - "/images/projetos/nexus-chat/screenshot-1.png"
---

## Sobre o Projeto

Nexus Chat implementa criptografia end-to-end real em conversas privadas — as chaves são geradas no navegador do usuário e nem o servidor tem acesso ao conteúdo das mensagens. O servidor atua apenas como retransmissor de bytes cifrados.

## Criptografia End-to-End

- **TweetNaCl** — biblioteca de criptografia auditada, implementação da NaCl
- **X25519 Diffie-Hellman** — troca de chaves sem expor a chave privada
- **XSalsa20-Poly1305** — cifra autenticada para as mensagens
- **Geração de chaves no cliente** — chave privada nunca sai do navegador

## Funcionalidades

- Chat em tempo real com Socket.io
- E2E em conversas privadas; grupos sem E2E
- Upload de fotos, vídeos e arquivos via multer
- Indicador de digitando em tempo real
- Confirmacao dupla de leitura
- Autenticação JWT com bcrypt

## Observações Técnicas

Iframes desabilitados — WebSockets não funcionam bem dentro de iframe. Em produção real: PostgreSQL em vez de SQLite, e AWS S3 ou Cloudflare R2 para uploads (o armazenamento local no Render gratuito é efêmero).

## Como Rodar Localmente

```bash
git clone https://github.com/Guimaraes-Davi/nexus-chat
cd nexus-chat
npm install
npm start
```

Acesse `http://localhost:3000`.
