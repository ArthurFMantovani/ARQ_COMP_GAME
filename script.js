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

document.addEventListener('DOMContentLoaded', () => {
  // Inicialização simples: preencher listas de pistas e deixar o DOM pronto.
  const listaH = document.getElementById('lista-horizontais');
  const listaV = document.getElementById('lista-verticais');

  // Apenas popular as listas por enquanto; o resto será implementado em commits seguintes.
  const horizontais = palavras.filter(p => p.direcao === 'H');
  const verticais = palavras.filter(p => p.direcao === 'V');

  horizontais.forEach((p, i) => {
    const li = document.createElement('li');
    li.textContent = `${p.pista}`;
    listaH.appendChild(li);
  });

  verticais.forEach((p, i) => {
    const li = document.createElement('li');
    li.textContent = `${p.pista}`;
    listaV.appendChild(li);
  });

  // Atualizar contador para o número mínimo de palavras (12 por enquanto)
  const contador = document.getElementById('contador');
  contador.textContent = `0 de ${palavras.length} palavras`;
});
