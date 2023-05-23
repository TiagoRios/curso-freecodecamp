/**
 * Função que retorna uma String convertendo para caracteres de entidades.
 * 
 * @param {String} str String que será convertida para funcionar em HTML 
 * @returns {String} String com as mudanças
 */
 function convertHTML(str) {
  let arrayChar = str.split("");

  for (let i = 0; i < arrayChar.length; i++) {
    if (arrayChar[i] == '&')
      arrayChar[i] = "&amp;";
    else if (arrayChar[i] == '<')
      arrayChar[i] = "&lt;";
    else if (arrayChar[i] == '>')
      arrayChar[i] = "&gt;";
    else if (arrayChar[i] == "'")
      arrayChar[i] = "&apos;";
    else if (arrayChar[i] == '"')
      arrayChar[i] = "&quot;";
  }
  return arrayChar.join("");
}

/* ==================================================
                    Outras soluções
   ================================================== */

//1ª Solução do site.
function convertHTML1(str) {
  let temp = str.split("");
  for (let i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }
  
  return temp.join("");
}

//2ª Solução do site.
function convertHTML2(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  return str.replace(/([&<>"'])/g, match => htmlEntities[match]);
}

//3ª Solução do site.
function convertHTML3(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}

module.exports = {
  convertHTML
}