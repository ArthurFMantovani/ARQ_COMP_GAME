 # ARQ_COMP_GAME
Projeto de avaliação final de Arquitetura Computacional.

Este repositório contém a implementação do jogo "Cruzadinha de Arquitetura Computacional" para a atividade avaliativa III.

Estrutura do projeto:
- index.html — página principal (na raiz)
- style.css — estilos
- script.js — lógica do jogo e dados (palavras e pistas)
- README.md — este arquivo

O desenvolvimento segue as regras da atividade: HTML, CSS e JavaScript puros, com entradas por teclado, botões Conferir/Reiniciar, e publicação via GitHub Pages.

Nome do jogo
-----------
Cruzadinha de Arquitetura Computacional

Como jogar
----------
- Leia a pista numerada na lista de Horizontais ou Verticais.
- Clique na primeira casa da palavra correspondente e digite as letras diretamente nas casas.
- Apenas letras são aceitas; a entrada é convertida para maiúsculas automaticamente.
- Use Backspace para apagar (se a casa estiver vazia, o foco volta para a anterior).
- Use as setas para navegar entre as casas.
- Clique em "Conferir" para marcar as palavras certas (verde) e erradas (vermelho). O contador mostrará quantas palavras estão corretas.
- Clique em "Reiniciar" para limpar o tabuleiro.

Palavras e pistas usadas
------------------------
As palavras abaixo constam no tabuleiro (grafia usada nas casas em maiúsculas, sem espaços):

1. MICROCONTROLADOR — Chip que reúne CPU, memória e pinos de E/S em um só pacote
2. MEMORIADEMASSA — Armazenamento permanente de arquivos e programas
3. REGISTRADORES — Pequenas memórias dentro da CPU que guardam valores imediatos
4. ADDRESSBUS — Conjunto de fios que indica o local na memória a acessar
5. DATABUS — Conjunto de fios que transporta valores lidos ou escritos
6. EEPROM — Memória não volátil pequena onde o programa pode salvar dados
7. CACHE — Memória muito rápida que guarda cópias de dados usados recentemente
8. FLASH — Memória não volátil regravável onde o programa do chip fica
9. CPU — Unidade que busca e executa as instruções do programa
10. ULA — Parte da CPU que realiza operações aritméticas e lógicas
11. UC — Parte da CPU que interpreta instruções e envia ordens
12. DMA — Mecanismo que permite copiar blocos de memória sem ocupar a CPU

Observação: as pistas foram escritas seguindo as regras da atividade (máx. 15 palavras e sem conter a resposta nem partes dela).

Publicação
-----------
Após concluir, publique o repositório no GitHub Pages: Settings → Pages → Deploy from a branch → branch: main → folder: / (root). O link gerado terá o formato:

https://SEU-USUARIO.github.io/arqcomp-cruzadinha/
