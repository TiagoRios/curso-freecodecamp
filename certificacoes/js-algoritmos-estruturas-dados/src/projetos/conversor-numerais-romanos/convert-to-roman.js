function convertToRoman(num) {
    let numerosRomanos = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M",
    };
    let resultado = [];
    let chavesObjeto = Object.keys(numerosRomanos); // Array com as chaves na ordem da declaração.

    for (let i = chavesObjeto.length - 1; i >= 0; i--) {
        let quantidadeRepeticoes = Math.floor(num / Number(chavesObjeto[i]));
        num = num % Number(chavesObjeto[i]); // Resto da divisão. 
        
        if (quantidadeRepeticoes > 0) {
            let numeroRomano = numerosRomanos[chavesObjeto[i]];
            resultado.push(numeroRomano.repeat(quantidadeRepeticoes));            
        }
    }
    return resultado.join("");
}

module.exports = {
    convertToRoman
}