/**
 * Função verifica se determinada string é um palindromo.
 * 
 * @param {String} str a String a ser analizada.
 * @returns um valor booleano "true" ou "false". 
 */
function palindrome(str) {
  let replaceStr = str.replaceAll(/[^A-Za-z0-9]/ig, "").toLowerCase();

  let reversaStr = replaceStr.split("").reverse().join("");
  return reversaStr === replaceStr;
}

module.exports = {
  palindrome
}