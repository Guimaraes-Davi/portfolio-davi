---
title: "Pokédex"
status: "finalizado"
shortDescription: "Aplicação web que consome a PokeAPI para busca e catalogação de pokémons, com sistema de favoritos persistente."
description: "Aplicação full-stack desenvolvida em Flask que consome a PokeAPI pública para buscar e exibir informações detalhadas de pokémons. Projeto como exercício prático de consumo de API externa, ORM e construção de interface responsiva."
stack: ["Python", "Flask", "SQLite", "PokeAPI"]
githubUrl: "https://github.com/Guimaraes-Davi/pokedex"
liveUrl: "https://pokedex-3yck.onrender.com"
embeddable: true
embedUrl: "https://pokedex-3yck.onrender.com"
featured: false
privateProject: false
startDate: 2026-04-29
endDate: 2026-05-05
tags: ["api", "full-stack", "python"]
---

## Sobre o Projeto

Aplicação full-stack desenvolvida em Flask que consome a PokeAPI pública para buscar e exibir informações detalhadas de pokémons.

## Funcionalidades

- Busca com autocomplete por nome ou número
- Visualização de stats base, tipos e habilidades
- Sistema de favoritos com persistência em banco SQLite local
- Interface responsiva com dark mode

## Decisões Técnicas

O SQLite foi escolhido para persistir os favoritos sem dependência de infraestrutura externa. A PokeAPI é consumida diretamente pelo backend Flask, que trata os dados antes de passar ao template. Isso mantém a lógica centralizada no servidor e o frontend simples.

## Como Rodar Localmente

```bash
git clone https://github.com/Guimaraes-Davi/pokedex
cd pokedex
pip install -r requirements.txt
python app.py
```

Acesse `http://localhost:5000`.
