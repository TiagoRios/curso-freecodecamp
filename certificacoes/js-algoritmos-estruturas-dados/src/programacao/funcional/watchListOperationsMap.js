/**
 * Método que cria um novo array com somente as propriedades title e imdbRating. 
 * 
 * @param Array contendo lista de filmes 
 * @returns Array de objetos filmes com title e imdbRatidn.
 */
function findTitleAndImdbRating(list) {
    const ratings = [];
    for (const element of list) {
        ratings.push({
            title: element['Title'],
            rating: element.imdbRating
        });
    }
    return ratings;
}

//Com funcional
function findTitleAndImdbRatingComMap(list) {
    return list.map(
        a => ({
            title: a.Title,
            rating: a['imdbRating'],
        })
    )
}

//Modificar prototype do objeto Array para criar um map com loop
Array.prototype.meuMapLoop = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
    }
    return newArray;
};

function findTitleAndImdbRatingComMeuMapLoop(list) {
    return list
        .meuMapLoop(a => ({ 
            title: a.Title, 
            rating: a['imdbRating'] 
        }))
}

//Modificar prototype do objeto Array para criar um map com forEach
Array.prototype.meuMapForEach = function (callback) {
    const newArray = [];
    this.forEach(a => newArray.push(callback(a)));
    return newArray;
};

function findTitleAndImdbRatingComMeuMapForEach(list) {
    return list
        .meuMapForEach(a => ({ title: a['Title'], rating: a['imdbRating'] }))
}

module.exports = {
    findTitleAndImdbRating,
    findTitleAndImdbRatingComMap,
    findTitleAndImdbRatingComMeuMapLoop,
    findTitleAndImdbRatingComMeuMapForEach,
}