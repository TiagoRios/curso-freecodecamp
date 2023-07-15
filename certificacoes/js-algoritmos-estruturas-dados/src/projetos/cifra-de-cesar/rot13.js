function rot13(str) {
  let arrayString = str.split(" ");
  let resultado = [];
  arrayString.forEach(palavra => {
    resultado.push(
      palavra.split("").map(x => { // transformo em array e faço mapeamento.
        let charCode = x.charCodeAt();
        if (charCode >= 65 && charCode <= 77) {
          return String.fromCharCode(charCode + 13)
        } else if (charCode >= 78 && charCode <= 90) {
          return String.fromCharCode(charCode - 13)
        } else {
          return x
        }
      }).join("") // após mapeamento transformo em string.
    );
  });
  return resultado.join(" ");
}

module.exports = {
  rot13
}