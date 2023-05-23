/**
 * Função retorna a soma dos números primos.
 * 
 * @param {number} num até qual número sera feita a soma.
 * @returns soma dos números primos menor ou igual a num.
 */
function sumPrimes(num) {
  let soma = 0;
  let contador = 0;
  for (let i = 2; i <= num; i++) {
    contador = 0;
    for (let j = 2; j <= i; j++) {
      if (i % j === 0) {
        contador++;
      }
    }
    if (contador == 1) {
      soma += i;
    }
  }
  return soma;
}

/* ==================================================
                    Outras soluções
   ================================================== */

//christiandbf
function checkPrime_Christiandbf(number) {
  if (number === 0 || number === 1) return false;
  for (let i = 2; i <= number; i++) {
    if (number % i === 0 && number !== i) {
      return false;
    }
  }
  return true;
}

//christiandbf
function sumPrimes_Christiandbf(num) {
  let result = 0;
  for (let number = 0; number <= num; number++) {
    if (checkPrime_Christiandbf(number)) {
      result += number;
    }
  }
  return result;
}

//1ª Solução do site.
function sumPrimes1(num) {
  // Helper function to check primality
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0)
        return false;
    }
    return true;
  }

  // Check all numbers for primality
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      sum += i;
  }
  return sum;
}

//2ª Solução do site.
function sumPrimes2(num) {
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0))
      primes.push(i);
  }
  return primes.reduce((sum, prime) => sum + prime, 0);
}

//3ª Solução do site.
function sumPrimes3(num) {
  // Prime number sieve
  // Cria um array com (num+1) posições com valores true.
  let isPrime = Array(num + 1).fill(true); // Preencher um array grande. Vamos ter problemas
  // 0 and 1 are not prime
  isPrime[0] = false;
  isPrime[1] = false;
  for (let i = 2; i <= Math.sqrt(num); i++) { // 10 = 3.1622...
    if (isPrime[i]) {
      // i has not been marked false -- it is prime
      for (let j = i * i; j <= num; j += i)
        isPrime[j] = false;
    }
  }

  // Sum all values still marked prime
  return isPrime.reduce(
    (sum, prime, index) => prime ? sum + index : sum, 0
  );
}

module.exports = {
  sumPrimes
}