---
title: "Prya"
status: "em-andamento"
shortDescription: "Assistente de código Python que roda 100% offline na sua máquina. Powered by DeepSeek Coder V2 via Ollama."
description: "Assistente de código Python privado e local — nenhum dado sai da máquina do usuário, sem API keys, sem custos, sem dependência de internet."
stack: ["Python", "Flask", "Ollama", "DeepSeek Coder V2"]
githubUrl: "https://github.com/Guimaraes-Davi/prya"
embeddable: false
featured: true
privateProject: true
startDate: 2025-03-01
tags: ["ia", "privacidade", "local", "python"]
---

## Sobre o Projeto

Prya é um assistente de código Python privado e local — nenhum dado sai da máquina do usuário. Construído sobre o modelo DeepSeek Coder V2 servido via Ollama, com interface web Flask em dark mode.

Por design, Prya não tem deploy online. O repositório está público para fins de portfólio e demonstração técnica, mas requer instalação manual do Ollama e download do modelo (~9GB) para uso real.

## Funcionalidades — V1 (entregue)

- Geração de funções sob demanda via prompt em linguagem natural
- Análise de código com detecção de bugs e sugestões de melhoria
- Memória de conversa por sessão (janela de 20 mensagens)
- Streaming de resposta em tempo real
- Syntax highlight automático nos blocos de código
- Botão de cópia para blocos de código

## Roadmap

- **V2** — RAG com documentação local (planejado)
- **V3** — Modo editor com análise de arquivo ao vivo (planejado)

## Requisitos para Uso

1. Instalar [Ollama](https://ollama.ai)
2. Baixar o modelo: `ollama pull deepseek-coder-v2`
3. Clonar o repositório e instalar dependências
4. Executar `python app.py`

O modelo ocupa aproximadamente 9GB de espaço em disco. Recomendado: GPU dedicada ou CPU com 16GB+ de RAM para desempenho adequado.

## Como Rodar Localmente

```bash
git clone https://github.com/Guimaraes-Davi/prya
cd prya
pip install -r requirements.txt
ollama pull deepseek-coder-v2
python app.py
```

Acesse `http://localhost:5000`.
