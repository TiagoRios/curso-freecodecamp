/**
 * Função que retorna o MMC (Minimo multiplo comum) de um intervalo de números.
 * 
 * exemplo: MMC[1,3] = qual número é divisível por 1, 2 e 3.
 * @param arr Array com a faixa de números fornecido.
 * @returns um inteiro com o valor do MMC.
 */

//Está solução não passa no site. potêncial infinito.
//Aqui funciona.
//Solução ruim. muitos ciclos de processamento.
function smallestCommonsRuim(arr) {
  let arrayOrdenado = arr.sort((a, b) => a - b);
  let menorNumero = arrayOrdenado[0];
  let maiorNumero = arrayOrdenado[arrayOrdenado.length - 1];
  let a = 0;

  let i = maiorNumero;
  while ( i > a) {
    if (a == (i - 1)) {
      return a;
    }
    for (let j = menorNumero; j <= maiorNumero; j++) {
      if (i % j == 0 && i % maiorNumero == 0) {
        a = i;
      } else {
        a = 0;
        break;
      }
    } //for
    i++;
  } //while
  return a;
}

// 1ª solução do site. Looping approach
// In this solution, we check every multiple of the largest value in 
// the range until we find a value that is divisible by every value in the range.

// The upper bound for this loop is the product of all values in 
// the provided range, because this number will be divisible by 
// every value in the range.
function smallestCommons1(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
  // Largest possible value for SCM
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    } //for
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  } //for
}

// 2ª solução do site. Mesma coisa da solução 1. utilizando programação funcional.
//This solution uses ES6 syntax to condense the logic in Solution 1.
function smallestCommons2(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  // Largest possible value for SCM
  const upperBound = range.reduce((prod, curr) => prod * curr);
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    const divisible = range.every((value) => multiple % value === 0);
    if (divisible) {
      return multiple;
    }
  }
}

// 3ª solução do site. GCD - greatest commom divisor and LCM - least commom multiple
// This solution uses formulae and algorithms for the Greatest Common Divisor and
// Least Common Multiple off of Wikipedia to compactly and quickly compute 
// the Smallest Common Multiple.
function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  // GCD of two numbers
  // https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm
  const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
  // LCM of two numbers
  // https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
  const lcm = (a, b) => a * b / gcd(a, b);
  // LCM of multiple numbers
  // https://en.wikipedia.org/wiki/Least_common_multiple#Other
  return range.reduce((multiple, curr) => lcm(multiple, curr));
}

// 4ª solução do site. Prime factorization 
// This solution uses a prime factorization of the numbers in 
// the range to compute the smallest common multiple. 
// In general, Solution 3 is much faster, but with a very large range 
// or very large values, sometimes Solution 3 may trigger a 
// recursion limit in some browsers.
function smallestCommons4(arr) {
  const primeFactors = {};
  const [min, max] = arr.sort((a, b) => a - b);
  for (let i = min; i <= max; i++) {
    // Factorize number in range
    const currentFactors = getPrimeFactors(i); // 
    for (let prime in currentFactors) {
      // Add factor to set or update number of occurrences
      if (!primeFactors[prime] || currentFactors[prime] > primeFactors[prime]) {
        primeFactors[prime] = currentFactors[prime]
      }
    }
  }
  // Build SCM from factorization
  let multiple = 1;
  for (let prime in primeFactors) {
    multiple *= prime ** primeFactors[prime];
  }
  return multiple;
}

// Compute prime factors of a number
function getPrimeFactors(num) {
  const factors = {};
  for (let i = 2; i <= num; i++) {
    // Count occurances of factor
    // Note that composite values will not divide num
    while ((num % i) === 0) {
      factors[i] = (factors[i]) ? factors[i] + 1 : 1;
      num /= i;
    }
  }
  return factors;
}

// console log(smallestCommons([18, 23]));

module.exports = {
  smallestCommons
}