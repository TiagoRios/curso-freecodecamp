function Animal(nome = 'default name') { //propriedade privada.
  this.getNome = () =>{ //closure - somente o metodo tem acesso ao contexto.
    return nome;
  };
  this.setNome = (n) =>{
    nome = n;
  }
}

Animal.prototype = {
  constructor: Animal,
  comer: function () {return 'comendo'},
}

module.exports = Animal;