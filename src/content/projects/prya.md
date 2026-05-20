---
title: "Prya V2"
slug: "prya"
status: "finalizado"
shortDescription: "Assistente de código Python 100% local e privado com RAG. Powered by DeepSeek Coder V2 via Ollama e ChromaDB para contexto de documentação."
description: "Assistente de código privado que roda exclusivamente na máquina do usuário. Sem API keys, sem internet, sem custos. Usa DeepSeek Coder V2 via Ollama com RAG via ChromaDB para injetar documentação local nas respostas."
stack: ["Python", "Flask", "Ollama", "DeepSeek Coder V2", "ChromaDB", "nomic-embed-text"]
githubUrl: "https://github.com/Guimaraes-Davi/prya"
embeddable: false
privateProject: false
featured: true
startDate: 2024-01-01
endDate: 2025-12-01
tags: ["ia", "privacidade", "local", "python", "rag"]
---

Assistente de código privado e local. Nenhum dado sai da máquina. Sem API keys, sem custos, sem internet.

## Funcionalidades

- Chat com memória persistente entre sessões (salva em JSON)
- RAG com ChromaDB — indexa documentação local e injeta contexto nas respostas
- Embeddings via nomic-embed-text (também local, via Ollama)
- Geração e análise de código Python com streaming em tempo real
- Syntax highlight com botão copiar
- Interface web dark mode com paleta #121212 / #94dd5f
- Rota `/indexar` para indexar arquivos da pasta `dados/`
- Rota `/status` para verificar estado da indexação

## Arquitetura

```
app/
├── __init__.py   — factory Flask
├── ollama.py     — chamada ao Ollama + injeção de contexto RAG
├── memoria.py    — histórico com janela de 20 msgs + persistência JSON
├── contexto.py   — RAG com ChromaDB + embeddings nomic-embed-text
└── routes.py     — rotas Flask (/chat, /indexar, /status, /limpar)
```

## Stack

| Camada | Tecnologia |
|---|---|
| Backend | Python / Flask |
| LLM | Ollama — DeepSeek Coder V2 (15.7B Q4_0) |
| RAG | ChromaDB 1.5+ |
| Embeddings | nomic-embed-text via Ollama API |
| Interface | HTML / CSS / JavaScript |

## Roadmap

| Versão | Status | Descrição |
|---|---|---|
| V1.0 | Concluído | Chat com memória + streaming + syntax highlight |
| V1.1 | Concluído | Redesign minimalista — paleta #121212 / #94dd5f |
| V2.0 | Concluído | RAG com ChromaDB + nomic-embed-text |
| V2.1 | Concluído | Persistência real do histórico entre reinicializações |
| V3.0 | Projeto separado | CLI agentic multi-linguagem (ver Prya V3) |

## Observações

Prya roda exclusivamente local por design — sem deploy online. O modelo DeepSeek Coder V2 ocupa ~9.2GB. Com ChromaDB rodando junto, máquinas com menos de 16GB de RAM precisam forçar CPU para evitar estouro de memória. A pasta `dados/` é ignorada pelo Git e serve para documentação privada.
