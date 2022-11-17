const Animal = require('./Animal.js')

function PassaroHeranca() {
  Animal.call(this); //Somente consigo chamar metodos definidos dentro da para propria função com isso.
  this.peso = 0.400;
  this.getPeso = () => { return this.peso; };
  this.setPeso = (n) => { this.peso = n; };
}
PassaroHeranca.prototype = Object.create(Animal.prototype); //modifiquei o prototype.
PassaroHeranca.constructor = PassaroHeranca; //Propriedade precisa ser redefinida ao alterar o prototype do objeto.

//Não modifiquei o prototype - Não preciso redefinir a propriedade constructor.
function PassaroSemHeranca() {
  this.peso = 0.500;
  this.getPeso = function () { return this.peso; };
  this.setPeso = function (n) { this.peso = n; };
}

module.exports = {
  PassaroHeranca,
  PassaroSemHeranca,
}