/**
 * Função que retorna outra string formatada com traços.
 * 
 * @param {String} str String para analise
 * @returns nova String separada por '-' traço.
 */
function spinalCase(str) {
  return str
    .split(/\W|_|(?=[A-Z])/)//LookAHead positivo. (?=[A-Z]), ou negativo = "?!"
    .join('-')
    .toLowerCase();
}

/* ==================================================
                    Outras soluções
   ================================================== */

//1ª solução do site.
function spinalCase1(str) {
  let regex = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str.replace(regex, "-").toLowerCase();
}

//2ª solução do site.
function spinalCase2(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str
  .toLowerCase()
  //.split(/(?:_| )+/) //problemas com Lint
  .join("-");
}

//3ª solução do site.
function spinalCase3(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

module.exports = {
  spinalCase
}