---
title: "Leitor XML Fiscal"
status: "finalizado"
shortDescription: "Aplicação web para leitura e interpretação de documentos fiscais brasileiros (NF-e, CT-e, MDF-e)."
description: "Ferramenta web desenvolvida em Flask para upload e interpretação de documentos fiscais eletrônicos brasileiros. Identifica automaticamente o tipo de documento por namespace XML e extrai os dados de forma estruturada."
stack: ["Python", "Flask", "lxml"]
githubUrl: "https://github.com/Guimaraes-Davi/leitor-xml"
liveUrl: "https://leitor-xml.onrender.com"
embeddable: true
embedUrl: "https://leitor-xml.onrender.com"
featured: false
privateProject: false
startDate: 2026-05-12
endDate: 2026-05-12
tags: ["fiscal", "xml", "python"]
---

## Sobre o Projeto

Ferramenta web para upload e interpretação de documentos fiscais eletrônicos brasileiros. O projeto nasceu de experiência real com módulos fiscais no trabalho de suporte ERP — lidar com XMLs de NF-e, CT-e e MDF-e diretamente é doloroso e este leitor resolve isso.

## Documentos Suportados

A versão 1.0 entrega suporte completo a NF-e, com identificação automática do tipo baseada no namespace XML do documento.

## O Que o Parser Extrai (NF-e)

- **Emitente** — CNPJ, razão social, endereço, IE
- **Destinatário** — CPF/CNPJ, nome, endereço
- **Produtos** — código, descrição, NCM, CFOP, quantidade, valor unitário e total
- **Impostos** — ICMS, IPI, PIS, COFINS por produto
- **Totais** — resumo financeiro da nota
- **Dados da NF** — chave de acesso, número, série, data de emissão, natureza da operação

## Tecnologia

**lxml** foi escolhido por ser o parser XML mais rápido para Python, com suporte nativo a XPath e namespaces — essencial para navegar a estrutura hierárquica dos XMLs fiscais que usam múltiplos namespaces da SEFAZ.

## Casos de Uso

- Conferência de notas fiscais recebidas
- Extração de dados para conciliação
- Validação de XML antes de processar em sistemas legados
- Apoio para contadores e analistas fiscais

## Como Rodar Localmente

```bash
git clone https://github.com/Guimaraes-Davi/leitor-xml
cd leitor-xml
pip install -r requirements.txt
python app.py
```

Acesse `http://localhost:5000`.
