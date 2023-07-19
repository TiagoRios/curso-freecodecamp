/**
 * Válida telefone no formato dos estados unidos.
 * 
 * @param {String} str A string para validar.
 * @returns true caso válido senão false.
*/
function telephoneCheck(str) {
  let numeros = str.replace(/[^0-9]/g, "");
  if (numeros.length === 10) {
    return str.match(/(^\d(?=\d{2})\d{2}\s?\-?\d{3}\s?\-?\d{4}$|^\((?=\d{3}\))\d{3}\)\s?\-?\d{3}\s?\-?\d{4}$)/) ? true : false;
  } else if (numeros.length === 11 && numeros[0] == "1") {
    return str.match(/(^\d{1}\s?\-?\d(?=\d{2})\d{2}\s?\-?\d{3}\s?\-?\d{4}$|^\d{1}\s?\-?\((?=\d{3}\))\d{3}\)\s?\-?\d{3}\s?\-?\d{4}$)/) ? true : false;
  } else {
    return false;
  }
}

module.exports = {
  telephoneCheck
}