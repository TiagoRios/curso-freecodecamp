/**
 * Exibe apenas o título e a avaliação IMDB do filme.
 * Filtra filmes com avaliação IMDB maior ou igual a 9.
 * 
 * @param Array contendo a lista de filmes
 * @returns Array de objetos filmes
 */
function findTitleAndImdbRatingComFilter(list) {
    return list
        .filter(f => f.imdbRating >= 9)
        .map(a => ({ title: a.Title, rating: a['imdbRating'] }))//Só para limitar dados retornados.
}

Array.prototype.meuFilterLoop = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) { // this é o próprio Array
        if (callback(this[i]) === true) // this[i] é passado como argumento para a função callback.  
            newArray.push(this[i]);
    }
    return newArray;
};

function findTitleAndImdbRatingComMeuFilterLoop(list) {
    return list
        .meuFilterLoop((f) => f.imdbRating >= 9) // "f" recebe a referência ao objeto "this[i]"
        .map(a => ({ title: a.Title, rating: a['imdbRating'] }))//Só para limitar dados retornados.
}

Array.prototype.meuFilterForEach = function (callback) {
    const newArray = [];
    this.forEach(a => {
        if (callback(a) === true)
            newArray.push(a)
    })
    return newArray;
};

function findTitleAndImdbRatingComMeuFilterForEach(list) {
    return list
        .meuFilterForEach(f => f.imdbRating >= 9)
        .map(a => ({ title: a['Title'], rating: a['imdbRating'] }))//Só para limitar dados retornados.
}

module.exports = {
    findTitleAndImdbRatingComFilter,
    findTitleAndImdbRatingComMeuFilterLoop,
    findTitleAndImdbRatingComMeuFilterForEach
}