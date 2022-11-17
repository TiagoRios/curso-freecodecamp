const { Aviao } = require('../heranca/Aviao.js');
const { PassaroHeranca } = require('../heranca/Passaro.js');

let aviao = new Aviao();
let passaro = new PassaroHeranca();

//Usado para objetos não relacionados entre si.
let voarMixin = function (obj) {
    obj.voar = function () {
        return "Voando";
    };
};

let isVoarMixin = function (obj) {
    obj.isVoar = function () {
        return true;
    };
};

voarMixin(aviao);
voarMixin(passaro);

isVoarMixin(aviao);
isVoarMixin(passaro);

console.log('Aviao voa? ' + aviao.isVoar() + '. Aviao está ' + aviao.voar());
console.log(`Passaro voa? ${passaro.isVoar()}. Passaro está ${passaro.voar()}`);
