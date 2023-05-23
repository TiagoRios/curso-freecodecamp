/**
 * Função que realiza o somatório de uma faixa de números.
 * Não importa a ordem do maior.
 * 
 * @param {Array} arr Array contendo dois números.  
 * @returns {number} somatórios da faixa dos dois números.
 */
function sumAll(arr) {
  let arrayOrdenado = [...arr].sort((a, b) => a - b);
  let menorNumero = arrayOrdenado[0];
  let maiorNumero = arrayOrdenado[arrayOrdenado.length - 1]; //Obtenho valor do último elemento  
  let soma = 0;
  for (let i = menorNumero; i <= maiorNumero; i++) {
    soma += i;
  }
  return soma;
}

/* ==================================================
                    Outras soluções
   ================================================== */

//1ª solução do site.
function sumAll1(arr) {
  let max = Math.max(arr[0], arr[1]); 
  let min = Math.min(arr[0], arr[1]);
  let sumBetween = 0;
  for (let i = min; i <= max; i++) {
    sumBetween += i;
  }
  return sumBetween;
}

//2ª solução do site. que sacada massa - usando soma de PA.
const sumAll2 = arr => {
  // Buckle up everything to one!
  const startNum = arr[0];
  const endNum = arr[1];

  // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
  // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
  const numCount = Math.abs(startNum - endNum) + 1;

  // Using Arithmetic Progression summing formula
  const sum = ((startNum + endNum) * numCount) / 2;
  return sum;
};

//3ª solução do site. Passa no teste quando array tem mais de 2 elementos.
function sumAll3(arr) {
  let soma = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    soma += i;
  }
  return soma;
}

//4ª solução do site.
function sumAll4(arr) {
  const [first, last] = [...arr].sort((a, b) => a - b);
  return first !== last
    ? first + sumAll([first + 1, last])
    : first;
}

module.exports = {
  sumAll
}