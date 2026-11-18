const palavras = [
  { palavra: 'MICROCONTROLADOR', pista: 'Chip que reúne CPU, memória e pinos de E/S em um só pacote', linha: 4, coluna: 4, direcao: 'H' },
  { palavra: 'MEMORIADEMASSA', pista: 'Armazenamento permanente de arquivos e programas', linha: 4, coluna: 4, direcao: 'V' },
  { palavra: 'REGISTRADORES', pista: 'Pequenas memórias dentro da CPU que guardam valores imediatos', linha: 4, coluna: 7, direcao: 'V' },
  { palavra: 'ADDRESSBUS', pista: 'Conjunto de fios que indica o local na memória a acessar', linha: 1, coluna: 13, direcao: 'V' },
  { palavra: 'DATABUS', pista: 'Conjunto de fios que transporta valores lidos ou escritos', linha: 3, coluna: 16, direcao: 'V' },
  { palavra: 'EEPROM', pista: 'Memória não volátil pequena onde o programa pode salvar dados', linha: 0, coluna: 10, direcao: 'V' },
  { palavra: 'CACHE', pista: 'Memória muito rápida que guarda cópias de dados usados recentemente', linha: 5, coluna: 0, direcao: 'H' },
  { palavra: 'FLASH', pista: 'Memória não volátil regravável onde o programa do chip fica', linha: 15, coluna: 1, direcao: 'H' },
  { palavra: 'CPU', pista: 'Unidade que busca e executa as instruções do programa', linha: 9, coluna: 11, direcao: 'H' },
  { palavra: 'ULA', pista: 'Parte da CPU que realiza operações aritméticas e lógicas', linha: 10, coluna: 2, direcao: 'H' },
  { palavra: 'UC', pista: 'Parte da CPU que interpreta instruções e envia ordens', linha: 3, coluna: 6, direcao: 'V' },
  { palavra: 'DMA', pista: 'Mecanismo que permite copiar blocos de memória sem ocupar a CPU', linha: 13, coluna: 3, direcao: 'H' }
];

function calcularOcupacao(palavras){
  const ocupados = new Map();
  let minR = Infinity, minC = Infinity, maxR = -Infinity, maxC = -Infinity;

  palavras.forEach((p, wi) => {
    const texto = p.palavra;
    for(let i=0;i<texto.length;i++){
      const r = p.linha + (p.direcao === 'V' ? i : 0);
      const c = p.coluna + (p.direcao === 'H' ? i : 0);
      minR = Math.min(minR, r);
      minC = Math.min(minC, c);
      maxR = Math.max(maxR, r);
      maxC = Math.max(maxC, c);
      const key = `${r},${c}`;
      if(!ocupados.has(key)){
        ocupados.set(key, {letter: texto[i], starts: []});
      }
      // se é início da palavra, registre
      if(i === 0){
        ocupados.get(key).starts.push(wi);
      }
    }
  });

  return { ocupados, minR, minC, maxR, maxC };
}

function numerarInicios(ocupados){
  // extrai todas as chaves que têm starts.length>0 e ordena por linha, coluna
  const starts = [];
  ocupados.forEach((v, k) => {
    if(v.starts && v.starts.length>0){
      const [r,c] = k.split(',').map(Number);
      starts.push({key:k, r, c});
    }
  });
  starts.sort((a,b)=> a.r - b.r || a.c - b.c);
  const mapNum = new Map();
  let num = 1;
  starts.forEach(s => { mapNum.set(s.key, num++); });
  return mapNum;
}

function criarTabuleiro(){
  const tab = document.getElementById('tabuleiro');
  tab.innerHTML = '';
  const {ocupados, minR, minC, maxR, maxC} = calcularOcupacao(palavras);
  const numRows = maxR - minR + 1;
  const numCols = maxC - minC + 1;

  tab.style.gridTemplateColumns = `repeat(${numCols}, var(--casa-size))`;
  tab.style.gridTemplateRows = `repeat(${numRows}, var(--casa-size))`;

  // numerar inicios
  const numeracao = numerarInicios(ocupados);

  // criar cada célula ocupada
  ocupados.forEach((v, k) => {
    const [r,c] = k.split(',').map(Number);
    const cell = document.createElement('div');
    cell.className = 'casa';
    cell.style.gridRowStart = (r - minR) + 1;
    cell.style.gridColumnStart = (c - minC) + 1;
    cell.setAttribute('aria-label', `Linha ${r} Coluna ${c}`);
    cell.dataset.row = String(r);
    cell.dataset.col = String(c);
    cell.id = `c-${r}-${c}`;

    // numeracao se existir
    if(numeracao.has(k)){
      const span = document.createElement('span');
      span.className = 'numero';
      span.textContent = String(numeracao.get(k));
      cell.appendChild(span);
    }

    // input para a letra (ainda sem behavior avançado)
    const input = document.createElement('input');
    input.type = 'text';
    input.maxLength = 1;
    input.className = 'letra';
    input.setAttribute('aria-label', `Casa Linha ${r} Coluna ${c}`);
    input.autocomplete = 'off';
    input.spellcheck = false;
    input.inputMode = 'text';
    // solução armazenada em data-solution
    input.dataset.solution = v.letter.toUpperCase();
    cell.appendChild(input);

    tab.appendChild(cell);
  });

  // preencher as listas de pistas com números
  const listaH = document.getElementById('lista-horizontais');
  const listaV = document.getElementById('lista-verticais');
  listaH.innerHTML = '';
  listaV.innerHTML = '';

  // Para cada palavra, recupere o número da célula inicial e crie a li
  const palavrasComNumero = palavras.map((p, idx) => {
    const key = `${p.linha},${p.coluna}`;
    return { idx, number: numeracao.get(key) || 0, ...p };
  });

  const horiz = palavrasComNumero.filter(p=>p.direcao==='H').sort((a,b)=>a.number - b.number);
  const vert = palavrasComNumero.filter(p=>p.direcao==='V').sort((a,b)=>a.number - b.number);

  horiz.forEach(p => {
    const li = document.createElement('li');
    li.textContent = `${p.number}. ${p.pista}`;
    listaH.appendChild(li);
  });
  vert.forEach(p => {
    const li = document.createElement('li');
    li.textContent = `${p.number}. ${p.pista}`;
    listaV.appendChild(li);
  });

  // atualizar contador
  const contador = document.getElementById('contador');
  contador.textContent = `0 de ${palavras.length} palavras`;
}

document.addEventListener('DOMContentLoaded', () => {
  criarTabuleiro();
});

// --- Navegacao e verificacao ---
// Estruturas auxiliares preenchidas ao criar o tabuleiro
let mapaCelulas = new Map(); // key 'r,c' -> input element
let palavrasCells = []; // array de arrays de inputs por palavra index

function inicializarMapas(){
  mapaCelulas.clear();
  palavrasCells = palavras.map(p => []);
  // popular mapaCelulas
  const allInputs = document.querySelectorAll('#tabuleiro input.letra');
  allInputs.forEach(inp => {
    const r = Number(inp.parentElement.dataset.row);
    const c = Number(inp.parentElement.dataset.col);
    mapaCelulas.set(`${r},${c}`, inp);
  });

  // para cada palavra, montar lista de inputs na ordem
  palavras.forEach((p, idx) => {
    const seq = [];
    for(let i=0;i<p.palavra.length;i++){
      const r = p.linha + (p.direcao === 'V' ? i : 0);
      const c = p.coluna + (p.direcao === 'H' ? i : 0);
      const inp = mapaCelulas.get(`${r},${c}`);
      if(inp) seq.push(inp);
    }
    palavrasCells[idx] = seq;
  });

  // set tabindex to allow focus and attach listeners
  mapaCelulas.forEach(inp => {
    inp.tabIndex = 0;
    inp.addEventListener('keydown', handleKeyDown);
    inp.addEventListener('input', handleInput);
  });
}

function isLetter(s){
  return /^[a-zA-Z]$/.test(s);
}

function handleInput(e){
  const inp = e.target;
  let val = inp.value || '';
  // keep only first letter and uppercase
  if(val.length>1) val = val.slice(-1);
  if(!isLetter(val)){
    // remove non-letter
    inp.value = '';
    return;
  }
  inp.value = val.toUpperCase();

  // auto avançar para próxima célula da mesma palavra, se houver
  const {next} = localizarProximas(inp);
  if(next){ next.focus(); }
}

function handleKeyDown(e){
  const inp = e.target;
  const key = e.key;
  if(key === 'Backspace'){
    e.preventDefault();
    if(inp.value){
      inp.value = '';
    } else {
      // mover para anterior na palavra se existir
      const {prev} = localizarProximas(inp);
      if(prev){ prev.value=''; prev.focus(); }
    }
    return;
  }
  if(key === 'ArrowLeft' || key === 'ArrowRight' || key === 'ArrowUp' || key === 'ArrowDown'){
    e.preventDefault();
    const r = Number(inp.parentElement.dataset.row);
    const c = Number(inp.parentElement.dataset.col);
    let target;
    if(key === 'ArrowLeft') target = mapaCelulas.get(`${r},${c-1}`);
    if(key === 'ArrowRight') target = mapaCelulas.get(`${r},${c+1}`);
    if(key === 'ArrowUp') target = mapaCelulas.get(`${r-1},${c}`);
    if(key === 'ArrowDown') target = mapaCelulas.get(`${r+1},${c}`);
    if(target) target.focus();
    return;
  }
  // permitir apenas letras (outros teclas, exceto control, devem ser bloqueadas)
  if(key.length === 1 && !isLetter(key)){
    e.preventDefault();
    return;
  }
}

// localizar próximo e anterior input na mesma palavra (prioriza palavra horizontal ou vertical onde o input pertence)
function localizarProximas(inp){
  // encontrar palavra(s) que contêm este input
  for(let i=0;i<palavrasCells.length;i++){
    const seq = palavrasCells[i];
    const idx = seq.indexOf(inp);
    if(idx !== -1){
      const next = seq[idx+1] || null;
      const prev = seq[idx-1] || null;
      return {next, prev, palavraIndex: i};
    }
  }
  return {next:null, prev:null, palavraIndex:-1};
}

// Conferir e Reiniciar
function conferir(){
  let acertos = 0;
  palavrasCells.forEach((seq, wi) => {
    if(seq.length === 0) return;
    let correta = true;
    seq.forEach(inp => {
      const expected = inp.dataset.solution.toUpperCase();
      const got = (inp.value || '').toUpperCase();
      if(got === expected){
        inp.parentElement.classList.remove('errada');
        inp.parentElement.classList.add('certa');
      } else {
        inp.parentElement.classList.remove('certa');
        inp.parentElement.classList.add('errada');
        correta = false;
      }
    });
    if(correta) acertos++;
  });
  const contador = document.getElementById('contador');
  contador.textContent = `${acertos} de ${palavras.length} palavras`;
}

function reiniciar(){
  mapaCelulas.forEach(inp => {
    inp.value = '';
    const parent = inp.parentElement;
    parent.classList.remove('certa');
    parent.classList.remove('errada');
  });
  const contador = document.getElementById('contador');
  contador.textContent = `0 de ${palavras.length} palavras`;
}

// ligar botoes apos criar tabuleiro
document.addEventListener('DOMContentLoaded', () => {
  inicializarMapas();
  document.getElementById('btn-conferir').addEventListener('click', conferir);
  document.getElementById('btn-reiniciar').addEventListener('click', reiniciar);
});
