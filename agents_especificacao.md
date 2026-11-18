# Especificação do Agente — Cruzadinha de Arquitetura Computacional

Este documento resume os requisitos descritos em `agents.md`, registra decisões de alinhamento, lista as alterações propostas no repositório, as dúvidas que precisam de resposta do aluno/professor e descreve o plano de desenvolvimento principal.

1) Resumo dos requisitos (extraído de agents.md)
- Jogo de cruzadinha em HTML/CSS/JS puro com `index.html` na raiz.
- Tabuleiro com no mínimo 12 das 16 palavras fornecidas, cruzadas; cada palavra cruza com ao menos outra.
- Pistas numeradas separadas em Horizontais e Verticais.
- Jogador digita letras nas casas; entrada aceita somente letras e converte para maiúsculas.
- Botão "Conferir" que marca cada palavra como certa/errada (classes `.certa` e `.errada`).
- Contador de acertos no formato "X de 12 palavras".
- Botão "Reiniciar" que limpa o tabuleiro e zera o contador.
- Não criar casas manualmente no HTML: DOM gerado por JavaScript.
- Atributos de acessibilidade: cada casa deve ter `aria-label` com linha e coluna.
- Tamanho da grade definido por JavaScript via `gridTemplateColumns`/`gridTemplateRows`.
- Numerar casas iniciais em ordem de leitura (cima->baixo, esquerda->direita), reusando o mesmo número se uma casa inicia palavras H e V.
- Pistas devem ser exibidas como `<li>` em `#lista-horizontais` e `#lista-verticais` usando `textContent`.

2) Decisões e alinhamentos (o que farei)
- Vou preservar as coordenadas do array `palavras` em `script.js` — não as alterarei sem sua confirmação, porque a disposição foi validada.
- Vou criar apenas um novo arquivo de documentação `agents_especificacao.md` (este arquivo). Não criarei outros arquivos desnecessários.
- Implementarei a geração do tabuleiro e a lógica de interação em `script.js` conforme as regras do AGENTS.md.
- Usarei `textContent` para todas as inserções de pistas e letras; não usarei `innerHTML` com dados do usuário.
- Adicionarei `aria-label` às casas no formato: "Linha X Coluna Y" (podemos ajustar a frase se preferir outra linguagem).
- Navegação por teclado: avançar auto ao digitar, Backspace volta e apaga, setas movem o foco entre casas.

3) Alterações propostas nos arquivos
- `index.html` (pequenas mudanças se necessário):
  - Conferir se os elementos exigidos existem (`#tabuleiro`, `#lista-horizontais`, `#lista-verticais`, `#btn-conferir`, `#btn-reiniciar`, `#contador`).
  - Manter semântica (`header`, `main`, `section`, `ol`, `button`).
- `style.css`:
  - Não necessariamente mudanças grandes; possíveis ajustes visuais para exibir numeração das pistas dentro/ao lado das casas iniciais.
  - Garantir que classes `.certa` e `.errada` existam e sejam usadas.
- `script.js` (implementação principal):
  - Definir `palavras` com campos `palavra`, `pista`, `linha`, `coluna`, `direcao` (se já existir, manter).
  - Calcular dimensões do grid a partir das coordenadas mínimas e máximas.
  - Gerar apenas as casas usadas por palavras; atribuir a cada casa um identificador (ex: `c-L-C`), `data` attributes para linha/coluna, `aria-label`, e `tabindex` para foco.
  - Marcar e numerar casas iniciais seguindo ordem de leitura.
  - Implementar comportamento de digitação, navegação, Conferir e Reiniciar conforme especificado.
  - Atualizar contador com o número de palavras corretas ao Conferir.
- `README.md`:
  - Incluir nome do jogo, instruções de como jogar, lista de palavras com pistas e link do site após publicação.

4) Dúvidas / decisões a confirmar com você (necessárias antes de algumas mudanças)
1. Confirmação das pistas: você quer que eu use as pistas já existentes em `script.js` (se houver) ou quer que eu atualize/ajuste as pistas com base em trechos específicos do e-book da disciplina? Se tiver o trecho, por favor envie para eu adaptar as pistas.
2. RAM e ROM: o arquivo `agents.md` pergunta se deve manter RAM e ROM no jogo — você quer mantê-las? (Eles não aparecem na lista de 12 validadas; confirmar se devemos incluir entre as 16 possíveis.)
3. Publicação no GitHub Pages: você quer que eu faça o deploy e configure a página (eu posso preparar o repo e instruções, mas preciso de acesso à sua conta para publicar)?
4. Commits e versionamento: o documento exige no mínimo 6 commits em pelo menos 2 dias. Você deseja que eu crie os commits e mensagens conforme o padrão descrito (ex: `feat: ...`, `fix: ...`)? Posso orientar quais mudanças agrupar em cada commit.
5. Idioma das `aria-labels` e textos de acessibilidade: usar Português (padrão) ou prefere outro formato?
6. Tamanho da grade e casas vazias: devemos ocultar totalmente casas vazias (não gerá-las no DOM) ou gerar um grid completo e manter casas invisíveis? O requisito diz "As casas vazias não devem aparecer" — seguirei isso a menos que confirme outro comportamento.

5) Plano de desenvolvimento (passos práticos)
1. Analisar `index.html`, `style.css`, `script.js` existentes e apontar lacunas (ler o `script.js` atual para ver se `palavras` já existe e se há código parcial).
2. Implementar geração do tabuleiro dinâmica em `script.js`:
   - Calcular min/max linhas/colunas; definir grid CSS dinamicamente.
   - Criar casas apenas para letras ocupadas; adicionar atributos e tabindex.
3. Implementar numeração das pistas e geração das listas horizontais/verticais.
4. Implementar manipulação de teclado (letras, Backspace, setas) e foco automático.
5. Implementar botão Conferir: verificar cada palavra, marcar casas com `.certa`/`.errada`, atualizar contador.
6. Implementar botão Reiniciar.
7. Testes manuais no navegador: abrir `index.html` e checar console, usabilidade, acessibilidade e regras do checklist.
8. Preparar `README.md` com as informações solicitadas.
9. Fazer commits organizados (sugestão de mensagens: `feat: adiciona geracao do tabuleiro`, `feat: implementa navegacao por teclado`, `feat: adiciona botao conferir e contador`, `fix: ajusta numeracao de pistas`, `style: ajustes visuais`, `docs: cria README`).

6) Checklist de validação (vou usar este checklist antes de cada commit)
- index.html abre sem erros no console.
- Tabuleiro exibe as 12 palavras validadas, cruzadas corretamente.
- Casas iniciais numeradas; pistas listadas em Horizontais e Verticais.
- Digitar letra avança, Backspace apaga e volta, setas movem foco.
- Conferir marca palavras e atualiza contador.
- Reiniciar limpa o tabuleiro e o contador.
- Pistas não contêm a resposta, nem parte dela, nem a sigla por extenso.

7) Entregáveis e prazos sugeridos
- Entregáveis:
  - `script.js` completo e testado no navegador.
  - `README.md` preenchido.
  - commits seguindo o padrão exigido.
  - este arquivo `agents_especificacao.md` como documentação de alinhamento.
- Prazos: dependendo de sua disponibilidade para responder as dúvidas, estimo que a implementação básica leve 1-2 dias úteis e os ajustes finais + documentação mais 1 dia.

8) Próximos passos (a partir de agora)
1. Confirme as dúvidas listadas na seção 4 (especialmente pistas e RAM/ROM).
2. Autorização para eu começar a editar `script.js` e `README.md`. Vou primeiro abrir e analisar o conteúdo atual de `script.js` e enviar um resumo rápido do que falta.

Se concorda com os pontos acima, responda às perguntas da seção 4 e eu começo a implementar as mudanças no código imediatamente, registrando commits conforme formos progredindo.

---
Arquivo gerado automaticamente para documentar decisões do agente de desenvolvimento.

9) Respostas do aluno / confirmações recebidas
- Manter RAM e ROM no jogo: confirmado. Incluirei as palavras RAM e ROM entre as 16 possíveis e manterei a regra de usar no mínimo 12 no tabuleiro.
- Commits: você pediu que eu escreva um arquivo `commits.md` com as mensagens sugeridas; você mesmo fará os commits. Vou criar `commits.md` com uma sequência recomendada de pelo menos 6 commits e descrições.
- Publicação: você publicará no GitHub Pages pessoalmente — não farei deploy.
- Idioma das `aria-labels`: Português confirmado.

10) Ações imediatas que vou executar (seguindo suas confirmações)
1. Criar `commits.md` com a sequência de commits recomendada e as descrições de cada mudança para você aplicar ao longo dos dias.
2. Aguardar sua autorização para implementar o `script.js` e demais mudanças (se você preferir eu posso implementá-las e você só fará os commits; confirme se quer que eu implemente os arquivos agora ou se prefere implementá-los você mesmo com o roteiro e as mensagens que eu fornecer).

Se quiser que eu implemente o código agora, responda "Implemente agora" e eu começo a editar `script.js`, `README.md` e, quando necessário, `style.css`.
