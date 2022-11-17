// IIFE - Expressão de função invocada imediatamente
let funModule = (function () {
  return {
    voarMixin: function (obj) {
      obj.voar = function () {
        return "Voando";
      };
    },
    isVoarMixin: function (obj) {
      obj.isVoar = function () {
        return true;
      };
    }
  }
})();

let obj = new Object();

funModule.voarMixin(obj);
funModule.isVoarMixin(obj);

console.log(`Este Objeto voa? ${obj.isVoar()}. Objeto está ${obj.voar()}`);