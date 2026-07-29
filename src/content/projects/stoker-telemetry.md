---
title: "Stoker Telemetry"
slug: "stoker-telemetry"
status: "finalizado"
shortDescription: "Backend de telemetria e analytics em Node.js e MongoDB. Time-series collections, agregações de funil e retenção, dashboard em tempo real via Change Streams."
description: "API de telemetria em Node.js com Fastify e MongoDB para coletar e analisar dados de partidas do Stoker. Usa time-series collections para eventos de alto volume, aggregation pipelines para funil de progressão e retenção por coorte, e Change Streams alimentando um dashboard em tempo real por WebSocket."
stack: ["Node.js", "Fastify", "MongoDB", "WebSocket", "JavaScript"]
githubUrl: "https://github.com/Guimaraes-Davi/stoker-telemetry"
embeddable: false
privateProject: false
featured: true
order: 2
tags: ["backend", "mongodb", "nodejs", "analytics", "game-dev"]
---

Backend de telemetria para o Stoker, jogo de sobrevivência 2D em Godot 4. O objetivo é responder perguntas de design com dado em vez de intuição: em qual noite os jogadores desistem, se a causa predominante é falha de gestão de recurso ou falha de combate, e em que ponto do trilho as mortes se concentram.

## Por que MongoDB

**Schema variável por tipo de evento.** Um evento de corte de árvore carrega coordenada e quantidade de toras. Um evento de noite sobrevivida carrega número da noite, inimigos eliminados e munição gasta. Um evento de dano fatal carrega zona do trem e posição no mundo. Em modelo relacional isso resultaria em uma tabela larga majoritariamente nula ou no padrão entidade-atributo-valor, com um JOIN por atributo consultado. No modelo de documentos cada registro carrega apenas os campos que fazem sentido para ele, e adicionar um tipo novo de evento não exige migração.

**Time-series collections nativas.** A coleção de eventos é criada com `timeField`, `metaField` e granularidade definida. O MongoDB agrupa internamente documentos que compartilham o mesmo metadado em buckets comprimidos, reduzindo armazenamento e I/O em dados append-only. O expurgo de dados antigos fica a cargo do banco via `expireAfterSeconds`.

**Aggregation framework.** As perguntas de design são agregações de várias etapas sobre o mesmo conjunto de eventos, resolvidas em uma passagem pelo pipeline.

## Implementação

- Ingestão em lote com validação por JSON Schema e ciclo de vida de partida idempotente
- Funil de progressão entre noites usando `$setWindowFields`
- Dashboard multi-métrica em uma única query com `$facet`
- Retenção por coorte D1 e D7
- Mapa de calor de mortes por posição no trilho
- Paginação baseada em cursor
- Change Stream alimentando dashboard por WebSocket, com resume token persistido para retomar de onde parou após reinício
- Script de seed simulando 120 jogadores com curva de dificuldade plausível

## Stack

| Camada | Tecnologia |
|---|---|
| Runtime | Node.js 20 |
| Framework | Fastify 5 |
| Banco | MongoDB (driver nativo, sem ODM) |
| Real-time | Change Streams + WebSocket |
