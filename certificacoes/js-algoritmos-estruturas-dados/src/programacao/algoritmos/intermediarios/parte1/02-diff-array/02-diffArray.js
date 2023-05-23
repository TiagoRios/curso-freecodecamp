//Minha solução utilizava 2 loops for. Um horror só de pensar.
//Solução refatorada e é parecida com a solução 1.

//O tempo de processamento das funções e variações devem analizadas com cautela.

/**
 * Função que devolve a diferença simetrica entre dois arrays.
 * 
 * @param {Array} arr1 Primeiro array para comparar
 * @param {Array} arr2 Segundo array para comparar
 * @returns Array com os elementos não presentes no outro array 
 */
//1ª solução do site - Melhorada.
function diffArray(arr1, arr2) {
  const newArr = [];
  //Arrays mesclados com atribuição de desestruturação. MASSA Demais!
  for (const element of [...arr1, ...arr2]) {
    //Se não possuir os elementos no arr1 ou arr2.
    //Então insere no Array
    if (!arr1.includes(element) || !arr2.includes(element)) {
      newArr.push(element)
    }
  }
  return newArr;
}

/* ==================================================
                    Outras soluções
   ================================================== */

//2ª solução do site.
function diffArray2(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(a => !arr1.includes(a) || !arr2.includes(a));
}

//3ª solução do site. Variação da solução 2.

//4ª solução do site.
function diffArray4(arr1, arr2) {
  const difference = new Set(arr1);
  arr2.forEach((ele) =>
    difference.has(ele) ? difference.delete(ele) : difference.add(ele)
  );
  return Array.from(difference);
}

module.exports = {
  diffArray
}