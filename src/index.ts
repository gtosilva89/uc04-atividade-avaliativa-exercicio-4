// O jogo da memória é um clássico jogo formado por peças que apresentam uma figura em um dos lados.
// Cada figura se repete em duas peças diferentes. Para começar o jogo, as peças são postas com as figuras voltadas para baixo, para que não possam ser vistas.
// Cada participante deve, na sua vez, virar duas peças, caso as figuras sejam iguais, o participante deve recolher consigo esse par e jogar novamente.
// Se forem peças diferentes, estas devem ser viradas novamente, e sendo passada a vez ao participante seguinte. Ganha o jogo quem tiver mais pares no final do jogo.
// Nesse exercício, será uma versão simplificada do jogo, onde o computador deve descobrir os resultados das combinações.
// Dado o trecho de código para geração de um jogo da memória com 8 palavras, as quais serão armazenadas em um vetor de 16 posições dispostas aleatoriamente,
// crie um código para resolver e imprimir o resultado das posições com as palavras iguais, por exemplo: vetor[4] é igual ao vetor[6]; vetor [2] é igual ao vetor [3].


// Função para embaralhar um array (algoritmo Fisher-Yates)
function embaralhar(array: any[]): any[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Palavras para o jogo da memória
const palavras = ["casa", "bola", "sol", "lua", "gato", "cão", "árvore", "flor"];

// Duplica as palavras para formar os pares
const paresPalavras = palavras.concat(palavras);

// Embaralha as palavras
const jogo = embaralhar(paresPalavras);

// Encontra as posições das palavras iguais
const resultados: { [palavra: string]: number[] } = {};
for (let i = 0; i < jogo.length; i++) {
  const palavra = jogo[i];
  if (!resultados[palavra]) {
    resultados[palavra] = [];
  }
  resultados[palavra].push(i);
}

// Imprime os resultados
for (const palavra in resultados) {
  const posicoes = resultados[palavra];
  console.log(`"${palavra}": vetor[${posicoes[0]}] é igual ao vetor[${posicoes[1]}]`);
}
