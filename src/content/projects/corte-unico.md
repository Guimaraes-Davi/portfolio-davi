---
title: "Corte Único"
slug: "corte-unico"
status: "finalizado"
shortDescription: "Jogo de duelo samurai publicado no itch.io, desenvolvido do zero em Godot 4. Um único golpe decide o combate."
description: "Jogo de duelo samurai desenvolvido do zero em Godot 4 com GDScript e publicado no itch.io. Um único golpe decide o combate. Inclui máquina de estados completa, progressão de inimigos data-driven com 8 perfis, menus, efeitos sonoros randomizados e música persistente via Autoload."
stack: ["Godot 4", "GDScript"]
liveUrl: "https://dtroyd.itch.io/corte-unico"
embeddable: false
privateProject: false
featured: true
startDate: 2026-06-01
endDate: 2026-06-01
tags: ["game-dev", "godot", "indie", "publicado"]
---

Jogo de duelo samurai onde um único golpe decide o combate. Desenvolvido do zero em Godot 4 e publicado no itch.io com build web jogável no navegador.

## Mecânica

O duelo é uma leitura de intenção. O inimigo entra em preparação de golpe e o jogador tem uma janela para reagir — mas parte das preparações são fintas, e atacar na finta significa morte. Vencer exige distinguir o golpe real do blefe em frações de segundo.

## Progressão data-driven

Oito perfis de inimigo parametrizados por chance de finta, janela vulnerável, tempo mínimo e máximo de preparação, e grau de imprevisibilidade. Adicionar um inimigo novo é adicionar dados, não código. O oitavo nível foi desenhado em torno de paciência em vez de reflexo: uma espera longa que pune quem ataca por ansiedade.

## Técnica

- Máquina de estados cobrindo standoff, preparação, finta, recuperação de finta, golpe, vitória e morte
- Efeitos sonoros randomizados por `match` para variação de impacto
- Música persistente entre cenas via Autoload
- Menu de pausa com `Process Mode = Always`, necessário para os botões responderem com a árvore pausada
- Slider de volume via AudioServer com conversão `linear_to_db`
- Comportamento anti-cheat na pausa: continuar reinicia o duelo atual em vez de retomar no meio do ataque
- Build web single-threaded para compatibilidade máxima de navegador

## Publicação

Disponível gratuitamente em dtroyd.itch.io/corte-unico
