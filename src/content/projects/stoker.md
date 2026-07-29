---
title: "Stoker"
slug: "stoker"
status: "em-andamento"
shortDescription: "Jogo de sobrevivência 2D em Godot 4. Uma locomotiva atravessa um mundo pós-apocalíptico: de dia se corta lenha, de noite se defende o vagão."
description: "Jogo de sobrevivência 2D em pixel art desenvolvido em Godot 4 com GDScript. Uma locomotiva a vapor atravessa um mundo pós-apocalíptico. De dia o jogador desce do trem para cortar lenha e abastecer a fornalha, de noite defende o vagão de hordas de infectados a partir do teto. Permadeath, e a distância percorrida é a pontuação."
stack: ["Godot 4", "GDScript", "Aseprite"]
embeddable: false
privateProject: true
featured: true
order: 1
tags: ["game-dev", "godot", "indie", "arquitetura"]
---

Jogo de sobrevivência 2D em pixel art. Uma locomotiva a vapor atravessa um mundo pós-apocalíptico para a direita, e a distância percorrida é a única pontuação que importa. Morte é permanente.

## Loop central

O jogo se organiza em torno de uma decisão que o jogador repete a sessão inteira: parar ou avançar.

De dia, com o trem parado, a escada traseira desce e o jogador pode descer para cortar árvores e carregar troncos até o vagão de carga. Cada tronco alimenta a fornalha, que consome um por vez e move o trem. De noite, o jogador sobe ao teto do vagão e defende a composição das hordas que emboscam nos trilhos.

Parar significa segurança e recursos. Avançar significa progresso. O custo de parar é o que sustenta a tensão: as árvores ao redor não regeneram, então é obrigatório avançar para conseguir mais combustível, e cada minuto parado aumenta o tamanho da horda da noite seguinte.

## Decisões de design

**Sem inventário.** O jogador tem dois slots nas costas (machado e arma) e as mãos. Carregando um tronco não é possível atirar — para se defender é preciso largar a carga e perder a viagem. Uma regra simples que gera dilema sem adicionar sistema nenhum.

**Dano localizado.** Não existe barra de vida global do trem. Fornalha e armazém recebem dano de forma independente, o que transforma a defesa em uma decisão de prioridade em vez de uma soma.

**Emboscada em vez de perseguição.** Os infectados não correm atrás da locomotiva. Eles esperam nos trilhos à frente, o que é mais barato de implementar do que IA de perseguição e dá ao jogador alguns segundos de leitura antes do contato.

**Alavanca obrigatória.** Parar o trem é uma ação explícita do jogador, não uma consequência de ficar sem combustível. Quando o combustível acaba, a alavanca cai sozinha para desligada, o que evita o trem partir sem o jogador a bordo.

## Arquitetura técnica

**Balanceamento em Resource.** Todos os valores de ajuste (duração do dia e da noite, velocidade do jogador, gravidade, número base de inimigos, escalonamento por noite, munição por pente) vivem em um Resource `GameBalance` exportado para `balance.tres`. Isso permite tunar o jogo pelo inspector sem recompilar nem tocar em código.

**Comunicação por sinais.** A fornalha emite `combustivel_mudou`, `estado_mudou` e `apagou_sem_combustivel`. O scroll de fundo em Parallax2D reage ao estado da fornalha, não a uma variável global. Acoplamento mínimo entre sistemas.

**Camadas de física nomeadas.** `mundo`, `trem`, `jogador` e `interativo` em vez de números mágicos, o que mantém a colisão legível conforme o projeto cresce.

**Pixel art nativa.** Resolução base 480×270 com filtragem Nearest Neighbor e escala inteira. Sprites autorais desenhados em iPad, animados via AnimatedSprite2D com `speed_scale` amarrado à velocidade real do corpo.

## Telemetria

O comportamento dos jogadores é medido pelo Stoker Telemetry, backend próprio em Node.js e MongoDB que coleta eventos de partida e responde perguntas de design com dado em vez de intuição: em qual noite os jogadores desistem, se a causa predominante é falha de gestão de recurso ou de combate, e onde no trilho as mortes se concentram.

## Status

Em desenvolvimento ativo. Fornalha, alavanca, movimentação do jogador, geometria do trem e scroll de fundo funcionais. Próximas etapas: sistema de corte e transporte de lenha, escada retrátil e ciclo de noite com inimigos.

Projeto comercial — o código permanece fechado.
