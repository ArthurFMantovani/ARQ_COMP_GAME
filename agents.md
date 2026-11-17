# AGENTS.md — Cruzadinha de Arquitetura Computacional

## Contexto

Projeto da disciplina Arquitetura Computacional (SPTech, Sprint 3), Atividade Avaliativa III. O objetivo é um jogo de cruzadinha que roda no navegador, com os termos da aula de Tópicos de Arquitetura Computacional. Quem joga lê a pista e descobre a palavra.

O projeto será avaliado. O código precisa funcionar sem erros no navegador e cumprir todos os requisitos listados abaixo.

## Requisitos obrigatórios

1. Tabuleiro com no mínimo 12 das 16 palavras da lista, cruzadas entre si. Cada palavra cruza com pelo menos uma outra.
2. Pistas numeradas, separadas em Horizontais e Verticais.
3. O jogador digita as letras diretamente nas casas do tabuleiro.
4. Botão **Conferir**, que mostra quais palavras estão certas e quais estão erradas.
5. Contador de acertos no formato "X de 12 palavras".
6. Botão **Reiniciar**, que limpa o tabuleiro.
7. Feito somente com HTML, CSS e JavaScript puros, com `index.html` na raiz do projeto.

## Arquivos do projeto

- `index.html`: estrutura da página (já existe). Contém o contêiner `#tabuleiro`, as listas `#lista-horizontais` e `#lista-verticais`, os botões `#btn-conferir` e `#btn-reiniciar`, e o contador `#contador`.
- `style.css`: aparência (já existe). Usa as classes `.tabuleiro`, `.casa`, `.casa.certa` e `.casa.errada`.
- `script.js`: dados, geração do tabuleiro e lógica do jogo (a implementar).
- `README.md`: documentação (a implementar).

Não crie outros arquivos sem necessidade. Não adicione bibliotecas, frameworks, bundlers ou etapas de build.

## Ferramentas a implementar

### HTML
- Manter a semântica existente (`header`, `main`, `section`, `ol`, `button`).
- Acrescentar `aria-label` nas casas do tabuleiro, informando linha e coluna, para leitores de tela.
- Não escrever casas manualmente no HTML. Elas são criadas pelo JavaScript.

### CSS
- Definir o tamanho da grade do tabuleiro via JavaScript (`gridTemplateColumns` e `gridTemplateRows`), porque o número de linhas e colunas depende dos dados.
- Manter as classes `.certa` e `.errada` para o feedback visual do botão Conferir.
- Mostrar a numeração das pistas dentro ou ao lado das casas iniciais, de forma legível.
- Manter o layout responsivo já existente (`@media`).

### JavaScript
- **Dados:** array `palavras` em `script.js`, com os campos `palavra`, `pista`, `linha`, `coluna` e `direcao` (`"H"` ou `"V"`). Não altere as coordenadas sem avisar o aluno, porque a disposição foi validada.
- **Geração do tabuleiro:** calcular o tamanho da grade a partir da menor e da maior coordenada, criar as casas com `document.createElement`, e preencher apenas as casas que pertencem a alguma palavra. As casas vazias não devem aparecer.
- **Numeração:** numerar cada casa que é início de uma palavra, na ordem de leitura (de cima para baixo, da esquerda para a direita). Uma mesma casa pode iniciar uma palavra horizontal e uma vertical, e nesse caso usa o mesmo número.
- **Listas de pistas:** gerar `<li>` dentro de `#lista-horizontais` e `#lista-verticais`, com o número e o texto da pista.
- **Digitação:** aceitar somente letras. Converter para maiúsculas. Após digitar, avançar o foco para a próxima casa da mesma palavra. Com Backspace, apagar a casa atual e voltar. Com as setas, mover o foco entre as casas.
- **Conferir:** para cada palavra, comparar letra por letra, sem diferenciar maiúsculas de minúsculas. Marcar as casas da palavra como `.certa` ou `.errada`. Atualizar o contador com o número de palavras certas.
- **Reiniciar:** limpar todas as letras, remover as classes de feedback e zerar o contador.
- **Segurança:** usar `textContent` para inserir pistas e letras. Não usar `innerHTML` com dados do usuário.

## Dados de referência

A disposição atual tem 12 palavras e foi validada para não ter letras encostadas indevidamente:

| Palavra | Linha | Coluna | Direção |
|---|---|---|---|
| MICROCONTROLADOR | 4 | 4 | H |
| MEMORIADEMASSA | 4 | 4 | V |
| REGISTRADORES | 4 | 7 | V |
| ADDRESSBUS | 1 | 13 | V |
| DATABUS | 3 | 16 | V |
| EEPROM | 0 | 10 | V |
| CACHE | 5 | 0 | H |
| FLASH | 15 | 1 | H |
| CPU | 9 | 11 | H |
| ULA | 10 | 2 | H |
| UC | 3 | 6 | V |
| DMA | 13 | 3 | H |

As pistas estão em `script.js`. Elas precisam estar corretas segundo o e-book da disciplina. Se o aluno fornecer o trecho do material, ajuste as pistas para refletir o conteúdo do e-book.

## Regras das pistas

- Máximo de 15 palavras por pista.
- A pista não pode conter a resposta, nem parte dela, nem a sigla por extenso. Por exemplo, a pista de DATABUS não pode usar "dados" nem "barramento", e a de UC não pode usar "controle" nem "unidade".
- Cada pista deve levar a uma única resposta.

## Regras de código

- Código sem comentários, a menos que o exercício exija. Explicações vão na conversa com o aluno, não no arquivo.
- Identificadores em português, seguindo os nomes dos dados (`palavras`, `pista`, `linha`, `coluna`, `direcao`).
- Mudanças pequenas e focadas. Não reescreva arquivos inteiros sem necessidade.
- Antes de considerar uma tarefa pronta, abra `index.html` e verifique se não há erros no console do navegador.
- Não inclua RA, e-mail, telefone ou outros dados pessoais em nenhum arquivo do repositório, porque ele é público.

## Versionamento (Git)

- Repositório público. Nome exigido pela atividade: `arqcomp-cruzadinha`.
- No mínimo 6 commits, distribuídos em pelo menos 2 dias diferentes. Um único commit com tudo pronto não conta.
- Formato das mensagens: `tipo: descrição curta`. Tipos permitidos:
  - `feat`: nova funcionalidade
  - `fix`: correção
  - `style`: visual
  - `docs`: documentação
- Exemplos:
  - `feat: adiciona tabuleiro com 12 palavras`
  - `feat: implementa botão Conferir`
  - `fix: corrige verificação da palavra RAM`
  - `style: ajusta cores das casas certas e erradas`
  - `docs: cria README com regras do jogo`
- Faça commit somente depois de testar a mudança no navegador.

## README.md

Deve conter:
1. Nome do jogo.
2. Como jogar.
3. Lista das palavras usadas, com as pistas.
4. Link do site publicado.

## Publicação (GitHub Pages)

- Settings → Pages → Source: "Deploy from a branch", branch `main`, pasta `/ (root)`, Save.
- Link esperado: `https://SEU-USUARIO.github.io/arqcomp-cruzadinha/`
- Testar o link em uma janela anônima antes de entregar.
- Entrega no Moodle: somente o link, sem anexos.

## Checklist de validação

Antes de cada commit, confirmar:
- [ ] `index.html` abre sem erros no console.
- [ ] O tabuleiro mostra as 12 palavras, com as casas cruzadas corretamente.
- [ ] As casas iniciais estão numeradas e as pistas aparecem em Horizontais e Verticais.
- [ ] Digitar uma letra avança o foco. Backspace apaga e volta.
- [ ] Conferir marca as palavras certas e erradas, e atualiza o contador.
- [ ] Reiniciar limpa o tabuleiro, as cores e o contador.
- [ ] Nenhuma pista contém a resposta, nem parte dela, nem a sigla por extenso.