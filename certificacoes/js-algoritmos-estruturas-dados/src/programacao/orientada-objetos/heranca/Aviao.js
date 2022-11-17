function Aviao() {
  this.peso = 10.400;
  this.getPeso = () => { return this.peso; };
  this.setPeso = (n) => { this.peso = n; };
}

module.exports = {
  Aviao
}