/**
 * Função que remove do Array os argumentos extras passados dentro dela.
 * 
 * Não modifica o Array orginal.
 * 
 * @param {Array} arr Array a ser pesquisado. 
 * @returns Array com elementos já removidos.
 */
function destroyer(arr) {
  const arrArguments = Object.values(arguments).slice(1)
  // filtra elementos de arr que não estão no "arrArguments"
  return arr.filter(a => arrArguments.indexOf(a) === -1)
}

/* ==================================================
                    Outras soluções
   ================================================== */

//1ª solução do site. Nem compensa. Muito verbosa e difícil de manter
//2ª solução do site. Parecida com a minha.
function destroyer2(arr) {
  const valsToRemove = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !valsToRemove.includes(val);
  });
}

//3ª solução do site.
function destroyer3(arr, ...valsToRemove) {
  return arr.filter(elem => !valsToRemove.includes(elem));
}

module.exports = {
  destroyer : destroyer3
}