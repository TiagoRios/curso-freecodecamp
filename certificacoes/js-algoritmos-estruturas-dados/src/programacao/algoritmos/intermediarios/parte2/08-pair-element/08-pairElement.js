/**
 * Função que pareia dois elementos do DNA.
 * timina - T 
 * adenina - A
 * guanina - G 
 * Citosina - C
 * 
 * Sempre T com A e vice-versa
 * Sempre G com C e vice-versa
 * 
 * @param {String} str sequência do DNA que tenho que parear.
 * @returns {string[]} Array de arrays com elementos do DNA pareados.
 */
function pairElement(str) {
  let arrTotal = [];
  for (const element of str) {
    if (element === 'G') {
      arrTotal.push([element, 'C'])
    }
    if (element === 'C') {
      arrTotal.push([element, 'G'])
    }
    if (element === 'A') {
      arrTotal.push([element, 'T'])
    }
    if (element === 'T') {
      arrTotal.push([element, 'A'])
    }
  }
  return arrTotal;
}

/* ==================================================
                    Outras soluções
   ================================================== */

// 1ª solução do site.
function pairElement1(str) {
  const paired = [];
  for (const element of str) {
    switch (element) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  }
  return paired;
}

// solução do autor thisisandi. 
// parecida com a 1ª solução, pórem utilizando map & switch
function pairElementThisisandi(str) {
  return str.split("").map(x => {
    switch (x) {
      case "G":
        return ["G", "C"];
      case "C":
        return ["C", "G"];
      case "T":
        return ["T", "A"];
      case "A":
        return ["A", "T"];
    }
  });
}

// 2ª solução do site.
function pairElement2(str) {
  let pairs = { A: "T", T: "A", C: "G", G: "C" };
  let arr = str.split("");
  return arr.map(x => [x, pairs[x]]);
}

// solução do autor fentablar
// parecida com a 2ª solução, pórem utilizando Loop for
function pairElementFentablar(str) {
  let pairs = { "A": "T", "T": "A", "C": "G", "G": "C" };
  let pArr = [];
  for (let i of str) {
    pArr.push([i, pairs[i]]);
  }
  str = pArr;
  return str;
}

module.exports = {
  pairElement
}