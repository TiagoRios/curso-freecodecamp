/**
 * Função que retira as consoantes do inicio da palavra que as insere
 * no final da string. 
 * 
 * Se a palavra inicia com vogal o seu final é acrescentado 'way'.
 * Se a palavra inicia com consoante o seu final e acrescentado 'ay'
 * 
 * @param {Array} str string que será traduzida.
 * @returns {String} Uma string contendo tradução
 */

//Díficil de realizar manutenção. Pensar em outras soluções performática.
//Que loucura que fiz.
function translatePigLatin(str) {
  let arr = str.split('');
  if (arr[0].match(/[aeiou]/)) {
    arr.push('way');
    return arr.join('');
  } else {
    let i = 0;
    while (i < arr.length) {
      if (arr[0].match(/[^aeiou]/)) {//Caso não contenha vogal retorna array sem alterações.
        arr.push(arr.shift())
      } else { //assim que encontrar vogal acrescenta 'ay' no final do array.
        arr.push('ay');
        return arr.join('');
      }
      i++;
    }
  }
  arr.push('ay'); // caso não possuir vogais na palavra
  return arr.join('')
}

/* ==================================================
                    Outras soluções
   ================================================== */

//Variação da 1ª solução do site. sem ternário.
function translatePigLatinVariacaoSolucao1(str) {
  let regexConsoantes = /^[^aeiou]+/;
  let consoantes = str.match(regexConsoantes);
  if (consoantes !== null) {
    return str
      .replace(regexConsoantes, "")
      .concat(consoantes)
      .concat("ay")
  } else {
    return str.concat("way");
  }
}

//1ª solução do site. Com ternário.
function translatePigLatin1(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
      .replace(consonantRegex, "")
      .concat(myConsonants)
      .concat("ay")
    : str.concat("way");
}

//2ª solução do site. Díficil de realizar manutenção.
function translatePigLatin2(str) {
  let pigLatin = "";
  let regex = /[aeiou]/gi;

  if (str[0].match(regex)) {//Começa com vogal?
    pigLatin = str + "way";
  } else if (str.match(regex) === null) {//Não possui nenhuma vogal?
    pigLatin = str + "ay";
  } else {
    let vowelIndice = str.indexOf(str.match(regex)[0]); //Index da 1ª vogal.

    pigLatin = str.substr(vowelIndice) + //String começando na primeira vogal encontrada 
      str.substr(0, vowelIndice) + "ay"; //String da posição zero ate o index da primeira vogal
  }

  return pigLatin;
}

//3ª solução do site.
function translatePigLatin3(str) {
  if (str.match(/^[aeiou]/)) return str + "way"; //Começa com vogal?

  //Primeira ocorrencia de consoante seguida por outras consoantes.
  const conjuntoConsoantes = str.match(/^[^aeiou]+/)[0]; //se 3 consoantes.
  return str
    .substring(conjuntoConsoantes.length) //então começo substring na posição 3. Sem as consoantes.
    + conjuntoConsoantes + "ay"; //coloca as consoante(s) no fim mais "ay";
}

//4ª solução do site.
function translatePigLatin4(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

//5ª solução do site. Díficil de realizar manutenção. Dois ternários

module.exports = {
  translatePigLatin
}