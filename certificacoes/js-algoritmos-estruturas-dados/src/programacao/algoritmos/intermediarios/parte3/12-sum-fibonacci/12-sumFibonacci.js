/**
 * Função que soma os números impares do fibonacci
 * Menor ou igual ao número fornecido.
 * 
 * @param {number} num tamanho da sequência fibonacci.
 * @returns soma dos números impares.
 */
//1ª Solução do site.
function sumFibonacci(num) {
  if (num < 1) return 0;

  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }
  return result;
}

//Retorna array com fibonacci's
function fibonacci(num) {
  if (num < 1)
    return [];

  let prevNumber = 0;
  let currNumber = 1;
  let arr = [];

  while (currNumber <= num) {
    arr.push(prevNumber);
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }
  //senão, não aparece o próximo da sequência.
  arr.push(prevNumber);
  return arr;
}

//2ª Solução do site.
function sumFibs2(num) {
  // Perform checks for the validity of the input
  if (num <= 0) return 0;

  // Create an array of fib numbers till num
  const arrFib = [1, 1];
  let nextFib = 0;

  // We put the new Fibonacci numbers to the front so we
  // don't need to calculate the length of the array on each
  // iteration
  while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib);
  }
  // We filter the array to get the odd numbers and reduce them to get their sum.
  return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
}

//3ª Solução do site. Difícil de manutenção.
function sumFibs3(num) {
  let f0 = 0;
  let f1 = 1;
  let f2 = 1;

  let sum = 0;
  while (f1 <= num) {
    sum += f1;
    if (f2 <= num) sum += f2;

    [f0, f1] = [f1 + f2, f2 + (f1 + f2)];
    f2 = f0 + f1;
  }
  return sum;
}

module.exports = {
  sumFibonacci
}