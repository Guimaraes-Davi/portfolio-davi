---
title: "Prya V3"
slug: "prya-v3"
status: "em-andamento"
shortDescription: "CLI agentic de programação em português. Lê, edita, cria arquivos e executa comandos com confirmação obrigatória antes de qualquer modificação."
description: "Assistente de programação via terminal com loop agentic. Recebe pedidos em linguagem natural e opera sobre qualquer linguagem ou stack — com confirmação obrigatória antes de editar, criar ou executar qualquer coisa."
stack: ["Python", "OpenRouter", "rich", "prompt-toolkit", "python-dotenv"]
githubUrl: ""
embeddable: false
privateProject: false
featured: true
order: 4
tags: ["ia", "cli", "agentic", "python"]
---

> **Nome provisório.** Prya V3 é o nome de trabalho atual e pode mudar durante o desenvolvimento.

CLI agentic que recebe pedidos em linguagem natural e executa ações no projeto: lê arquivos, edita código, cria arquivos, roda comandos. Diferente da Prya V2 (chat web local), a V3 roda no terminal, usa API externa via OpenRouter e opera sobre qualquer linguagem ou stack.

## Funcionalidades V3.0

- Modo interativo (`prya`) e comando único (`prya "faça X"`)
- 5 ferramentas: `read_file`, `list_dir`, `edit_file`, `create_file`, `run_command`
- Confirmação `[s/N]` obrigatória antes de editar, criar ou executar qualquer coisa
- Diff visual antes de editar; preview com syntax highlight antes de criar
- `PRYA.md` — arquivo de contexto do projeto, injetado automaticamente no prompt
- Modelo configurável via `.env` — troca sem tocar no código
- Multi-linguagem: opera em qualquer arquivo de texto

## Stack

| Camada | Tecnologia |
|---|---|
| Runtime | Python 3.10+ |
| LLM | OpenRouter API (compatível com openai SDK) |
| Terminal | rich + prompt-toolkit |
| Config | python-dotenv |

## Modelos suportados

Qualquer modelo disponível no OpenRouter. Exemplos testados:

```
anthropic/claude-sonnet-4
deepseek/deepseek-chat
qwen/qwen-2.5-coder-32b-instruct
```

## Roadmap

| Versão | Status | Descrição |
|---|---|---|
| V3.0 | Concluído | Base: 5 ferramentas, loop agentic, PRYA.md, dois modos de uso |
| V3.1 | Planejado | Streaming de resposta + persistência de histórico |
| V3.2 | Planejado | Testes automatizados |

## Status

Base funcional implementada (V3.0). Em pausa aguardando avanço em outros projetos do portfólio. Repositório privado — sem publicação pública.
