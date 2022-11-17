/**
 * Funçaõ que realiza o somatório de uma faixa de números.
 * Não importa a ordem do maior.
 * 
 * @param arr contendo dois números.  
 * @returns somatórios da faixa dos dois números.
 */
function sumAll(arr) {
  //do meu jeito Limitava a quantidade de dados passados metodo .sort()
  //letarrayOrdenado = arr.sort((a, b) => a - b);
  //letmenorNumero = arrayOrdenado[0]; 
  //letmaiorNumero = arrayOrdenado[arrayOrdenado.length -1];  
  let soma = 0;
  //tecnica obtida da 3ª solução do site Math.min() e .max() com desestruturação.
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    soma += i;
  }
  return soma;
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

module.exports = {
  sumAll
}