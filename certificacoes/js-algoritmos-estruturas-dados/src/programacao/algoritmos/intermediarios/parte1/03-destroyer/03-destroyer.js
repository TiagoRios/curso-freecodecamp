/**
 * Função que remove do Array os argumentos extras passados dentro dela.
 * 
 * Não modifica o Array orginal.
 * 
 * @param {*} arr Array a ser pesquisado. 
 * @returns Array depois de removido os valores extras.
 */
function destroyer(arr) {
  let remover = Object.values(arguments).slice(1)
  return arr.filter(a => remover.indexOf(a) === -1)
}

/****************************************
            
             Outras soluções

 ****************************************/

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
  destroyer
}