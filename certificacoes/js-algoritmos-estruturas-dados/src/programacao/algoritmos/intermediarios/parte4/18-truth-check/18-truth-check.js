/**
 * Verifique se o predicado (segundo argumento) é verdadeiro em todos 
 * os elementos de uma coleção (primeiro argumento).
 * 
 * @param {*} collection Lista que precisa ser analisada. 
 * @param {*} pre o que estou procurando. 
 * @returns true se verdadeiro, senão falso
 */
function truthCheck(collection, pre) {
    return collection.every(x => x[pre]);
}

// 1ª solução do Site.
function truthCheck1(collection, pre) {
    // Create a counter to check how many are true.
    let counter = 0;
    // Check for each object
    for (let c in collection) {
        // If it is has property and value is truthy
        if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
            counter++;
        }
    }
    // Outside the loop, check to see if we got true for all of them and return true or false
    return counter == collection.length;
}

// 2ª solução do Site.
function truthCheck2(collection, pre) {
    return collection.every((e) => e.hasOwnProperty(pre) && Boolean(e[pre]));
}

// 3ª solução do site usando every.


// Anupammajhi, usuário do freecodecamp. 
function truthCheckReduce(collection, pre) {
    return collection.reduce((x, y) => Boolean(x && y[pre]), true);
}

// Tonystaark, usuário do freecodecamp.
function truthCheckTonystaark(collection, pre) {
    for (var obj of arguments[0]) {
        if (!obj[arguments[1]]) {
            return false;
        }
    }
    return true;
}

let a = [
    { name: "Pikachu", number: 25, caught: 3 },
    { name: "Togepi", number: 45, caught: 1 }
];

module.exports = {
    truthCheck
}