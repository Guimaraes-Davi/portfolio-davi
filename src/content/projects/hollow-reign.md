---
title: "Game Dev"
status: "futuro"
slug: "game-dev"
shortDescription: "Projeto de jogo indie 2D explorando sistemas modulares em Godot 4, com foco em arquitetura escalável e iteração rápida."
description: "Projeto de game development em fase de design e pré-produção. Tower defense 2D em pixel art construído sobre Godot 4 com GDScript, explorando arquitetura modular baseada em nodes independentes, Resource files do Godot para dados estáticos e autoloads para sistemas globais (recursos, ciclo dia/noite, IA)."
stack: ["Godot 4", "GDScript", "Aseprite", "Git"]
embeddable: false
privateProject: true
featured: true
startDate: 2026-05-16
tags: ["game-dev", "godot", "indie", "arquitetura"]
---

> **Nome provisório.** Hollow Reign é o nome de trabalho atual e pode mudar durante o desenvolvimento.

Projeto de game development em fase de design e pré-produção. Tower defense 2D em pixel art construído sobre Godot 4, focado em arquitetura modular, escopo controlado e iteração rápida.

## Stack técnica

- **Engine:** Godot 4
- **Linguagem:** GDScript com type hints obrigatórios
- **Arte:** Pixel art autoral em Aseprite
- **Versionamento:** Git com repositório privado durante desenvolvimento
- **Dados estáticos:** Resource files do Godot (ItemData, EnemyData, HeroData)
- **Sistemas globais:** Autoloads independentes por domínio (recursos, ciclo dia/noite, IA, save/load)

## Princípios de arquitetura

**Sistemas modulares.** Cada herói, inimigo e estrutura é um node independente. Adicionar conteúdo novo não pode quebrar o existente. Acoplamento mínimo via sinais (signals) do Godot em vez de referências diretas.

**Dados separados da lógica.** Resource files contêm os atributos (vida, dano, custo). Scripts contêm o comportamento. Isso permite balanceamento e adição de conteúdo sem tocar no código.

**Escopo é sagrado.** Cada feature nova precisa caber no MVP definido ou ir para o roadmap. Sem feature creep — o MVP é fechado e validado antes de qualquer expansão.

**Iteração rápida.** Mecânica nova → protótipo feio → testar diversão → polir depois. Otimização e arte final só vêm após validação de gameplay.

## Padrões de código

- GDScript com type hints sempre (`var nome: String`)
- Sinais em snake_case (`signal heroi_morto`)
- Constantes em UPPER_SNAKE_CASE
- Resource files para dados estáticos
- Cada sistema (recursos, dia/noite, IA) isolado em autoload próprio
- Documentação técnica em português, com CLAUDE.md mantendo o contexto entre sessões

## Escopo do MVP

MVP fechado em 1 bioma jogável, 3 heróis com skill trees, ciclo dia/noite funcional, sistema de recursos físicos, save/load e 4-5 tipos de inimigos. Roadmap pós-MVP documentado mas isolado do desenvolvimento atual para não inflar a entrega inicial.

## Status

Projeto comercial em pré-produção. Por se tratar de produto futuro com intenção de lançamento, o código permanecerá fechado. Demo gratuita será disponibilizada como código aberto a depender do estágio de desenvolvimento.