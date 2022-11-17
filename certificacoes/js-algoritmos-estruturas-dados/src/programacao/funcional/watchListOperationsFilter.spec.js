const { watchList } = require('./watchList.js');
const {
    findTitleAndImdbRatingComFilter,
    findTitleAndImdbRatingComMeuFilterLoop,
    findTitleAndImdbRatingComMeuFilterForEach } = require('./watchListOperationsFilter.js');

describe('Programação FUNCIONAL - FILTER', () => {
    test('Deve buscar nome do filme com imdbRating maior ou igual a 9 ', () => {
        expect(findTitleAndImdbRatingComFilter(watchList)[0]).toEqual({ "rating": "9.0", "title": "The Dark Knight" });
    })
    test('Deve buscar nome do filme com imdbRating maior ou igual a 9 com personalizado com Loop for', () => {
        expect(findTitleAndImdbRatingComMeuFilterLoop(watchList)[0]).toEqual({ "rating": "9.0", "title": "The Dark Knight" });
    })
    test('Deve buscar nome do filme com imdbRating maior ou igual a 9 com personalizado com Loop forEach', () => {
        expect(findTitleAndImdbRatingComMeuFilterForEach(watchList)[0]).toEqual({ "rating": "9.0", "title": "The Dark Knight" });
    })
})