# commits.md

Este arquivo lista uma sequência sugerida de commits (mensagem e descrição curta) que você fará ao desenvolver o projeto. As mensagens seguem o padrão exigido pelo enunciado: tipo: descrição curta.

Instruções de uso
- Faça os commits na ordem sugerida.
- Distribua-os em pelo menos 2 dias diferentes (por exemplo: faça até 3 commits no dia 1 e o restante no dia 2).
- Antes de cada commit, abra `index.html` no navegador e verifique o console para garantir que não há erros.

Sequência sugerida de commits

1) feat: cria esqueleto do projeto
   - Cria/atualiza `index.html`, `style.css` (estrutura básica) e `script.js` com o array `palavras` (dados) presente.
   - Objetivo: deixar o projeto com os arquivos base e as referências no HTML.

2) feat: implementa geracao do tabuleiro dinamico
   - Adiciona a função que calcula dimensões do grid, cria as casas no DOM, define `gridTemplateColumns`/`Rows` e adiciona `aria-label` e `data-` attributes.
   - Objetivo: DOM do tabuleiro gerado a partir dos dados sem casas vazias.

3) feat: implementa numeracao e listas de pistas
   - Implementa a lógica que numerará as casas iniciais em ordem de leitura e popula `#lista-horizontais` e `#lista-verticais` com as pistas usando `textContent`.

4) feat: adiciona navegacao por teclado e restricao de entrada
   - Implementa aceitação apenas de letras, conversão para maiúsculas, avanço automático do foco, comportamento do Backspace e navegação com setas.

5) feat: implementa botao Conferir e contador
   - Implementa verificação das palavras, marcação das casas com `.certa`/`.errada` e atualização do contador no formato "X de 12 palavras".

6) feat: implementa botao Reiniciar e ajustes finais
   - Implementa limpeza do tabuleiro, remoção de classes de feedback e reset do contador. Pequenos ajustes de estilo/responsividade.

7) fix: corrige problemas encontrados nos testes manuais
   - Ajustes pontuais (navegação, foco, casos de borda). Mensagem de exemplo: `fix: corrige retorno do foco com Backspace`.

8) style: ajustes visuais e acessibilidade
   - Ajustes em `style.css` para exibir a numeração das pistas, melhorar contraste e responsividade.

9) docs: cria README com instrucoes e lista de palavras
   - Preenche `README.md` com nome do jogo, como jogar, lista das palavras com as pistas e instruções de publicação.

Observações
- Você pode dividir os itens maiores (por exemplo, passo 2) em commits menores se preferir mais granularidade.
- As mensagens acima são sugestões — mantenha o tipo (`feat`, `fix`, `style`, `docs`) e uma descrição curta e objetiva.

Boa prática para distribuir em 2 dias
- Dia 1: commits 1, 2, 3
- Dia 2: commits 4, 5, 6, 7, 8, 9 (ou espalhar correções entre os dias conforme testes)

Pronto. Quando quiser, eu implemento os arquivos e deixo o workspace pronto para você commitar seguindo essas mensagens, ou apenas digo os comandos de git se preferir fazer tudo localmente.
