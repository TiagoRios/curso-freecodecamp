/**
 * Transforma uma string escrita em binário em caracteres.
 * 
 * @param {*} str A string com texto em binário.
 * @returns A string convertida para caracteres.
 */
function binaryAgent(str) {
    return str
        .split(" ")
        .map(e => String.fromCharCode(parseInt(e, 2)))
        .join("");
}

// 3ª solução do site.
function binaryAgent3(str) {
    return String.fromCharCode(...str.split(" ").map((char) => parseInt(char, 2)));
}
module.exports = {
    binaryAgent
}