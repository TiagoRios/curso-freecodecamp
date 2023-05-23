/**
 * Função que retornar elementos únicos do(s) array(s).
 * 
 * @param {Array} arr Array(s) que deve(m) ser analisado(s).
 * @returns {Array} Array contendo apenas 1 ocorrência de todos os elementos nos Arrays 
 */
//igual a solução 4. Primeiro tentei usar concat. mas dava errado.
//MDN método .flat() = cria novo array com todos elementos dos sub-arrays
function uniteUnique(...arr) {
  return arr.flat()
    .filter((elem, pos, arr) => arr.indexOf(elem) == pos)
}

/* ==================================================
                    Outras soluções
   ================================================== */

//1ª solução do site. igual a segunda. Utiliza .indexOf()
//Depois de remover as variáveis inuteis.
function uniteUnique1(arr1, arr2, arr3) {
  const result = [];
  for (const arrays of arguments) {
    for (const elementosArray of arrays) {
      if (result.indexOf(elementosArray) < 0) {
        result.push(elementosArray);
      }
    }
  }
  return result;
}

//2ª solução do site. igual a primeira. Utiliza .includes()
function uniteUnique2(arr) {
  const result = [];
  for (const arrays of arguments) {
    for (const elementosArray of arrays) {
      if (!result.includes(elementosArray)) {
        result.push(elementosArray);
      }
    }
  }
  return result;
}

//3ª solução do site. Top!
function uniteUnique3(...arr) {
  return [...new Set(arr.flat())];
}

//4ª solução do site. parecida com a minha.
function uniteUnique4(arr) {
  return [...arguments]
    .flat()
    .filter((item, ind, arr) => arr.indexOf(item) === ind);
}

module.exports = {
  uniteUnique
}