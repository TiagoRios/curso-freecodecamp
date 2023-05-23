/* 
1-Percorrer cada elemento da collection
2-Percorrer cada chave do elemento source e
3-Verificar se OBJETO da COLLECTION possui a CHAVE de SOURCE
&& e Verificar se o valor da propriedade de AMBOS são iguais 
 */

/**
 * Função que localiza objetos no Array de objetos.
 * 
 * @param {Iterable} collection Array com objetos
 * @param {Object} source Objeto(s) procurado(s).
 * @returns array com objeto(s) localizado(s).
 */

//Variação da 2ª solução.
function whatIsInAName(collection, source) {
  const arr = [];
  const chavesObjSource = Object.keys(source);

  arr.push(...collection
    .filter(cadaObjetoCollection => chavesObjSource
      .every(nomeCadaChaveObjSource => cadaObjetoCollection.hasOwnProperty(nomeCadaChaveObjSource) // Possui a propriedade ?
        && cadaObjetoCollection[nomeCadaChaveObjSource] === source[nomeCadaChaveObjSource]))) //Chaves iguais ?
  return arr;
}

/* ==================================================
                    Outras soluções
   ================================================== */

//Parcial DECLARATIVA/IMPERATIVO
//1ª solução do site. FILTER.
function whatIsInAName1(collection, source) {
  const souceKeys = Object.keys(source);

  //Consigo fazer laços dentro do filter
  return collection.filter(cadaObjetoCollection => {
    for (const nomeChaveCadaObj of souceKeys) {
      if (!cadaObjetoCollection.hasOwnProperty(nomeChaveCadaObj) ||
        cadaObjetoCollection[nomeChaveCadaObj] !== source[nomeChaveCadaObj]) {
        return false;
      }
    }
    return true; //para o filter
  });
}

//DECLARATIVA
//2ª solução do site. Usando FILTER, EVERY.
function whatIsInAName2(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection
    .filter(cadaObjetoCollection => sourceKeys
      .every(nomeCadaChaveObjSource => cadaObjetoCollection.hasOwnProperty(nomeCadaChaveObjSource)
        && cadaObjetoCollection[nomeCadaChaveObjSource] === source[nomeCadaChaveObjSource]));
}

//DECLARATIVA
//3ª solução do site. Usando FILTER, MAP e REDUCE.
function whatIsInAName3(collection, source) {
  const souceKeys = Object.keys(source);

  return collection.filter(obj => souceKeys
    .map(key => obj.hasOwnProperty(key) && obj[key] === source[key])
    .reduce((a, b) => a && b));
}

//IMPERATIVA
//4ª solução do site.
function whatIsInAName4(collection, source) {
  const arr = [];

  for (const element of collection) {
    let found = true;
    for (const sourceProp in source) {
      if (element[sourceProp] !== source[sourceProp]) {
        found = false;
        break;
      }
    }
    if (found) arr.push(element);
  }
  return arr;
}

module.exports = {
  whatIsInAName
}