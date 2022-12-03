/**
 * Função que retorna a letra que falta em uma sequência.
 * 
 * @param str String que contém a sequência de letras
 * @returns String da letra que falta;
 */
//1ª solução do site.
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode !== str.charCodeAt(0) + i) {
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}

//2ª solução do site.
function fearNotLetter2(str) {
  let currCharCode = str.charCodeAt(0);
  let missing = undefined;
  
  str
    .split("")
    .forEach(letter => {
      if (letter.charCodeAt(0) === currCharCode) {
        currCharCode++;
      } else {
        missing = String.fromCharCode(currCharCode);
      }
    });

  return missing;
}

//3ª solução do site.
function fearNotLette3(str) {
  for (let i = 0; i < str.length; ++i) {
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {//diferença de codigos maior que 1.
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
}

module.exports = {
  fearNotLetter
}