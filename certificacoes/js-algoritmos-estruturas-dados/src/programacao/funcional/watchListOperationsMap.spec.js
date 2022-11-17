const { watchList } = require('./watchList.js');
const { findTitleAndImdbRating,
    findTitleAndImdbRatingComMap,
    findTitleAndImdbRatingComMeuMapLoop,
    findTitleAndImdbRatingComMeuMapForEach
} = require('./watchListOperationsMap.js');

describe('Programação IMPERATIVA - MAP', () => {
    test('Deve Obter primeiro objeto do array', () => {
        expect(findTitleAndImdbRating(watchList)[0]).toEqual({ "rating": "8.8", "title": "Inception" });
    })
})
describe('Programação FUNCIONAL - MAP', () => {
    test('Deve Obter segundo objeto do array MAP Embutido', () => {
        expect(findTitleAndImdbRatingComMap(watchList)[1]).toEqual({ "rating": "8.6", "title": "Interstellar" });
    })
    test('Deve Obter terceiro objeto do array MAP personalizado com loop for', () => {
        expect(findTitleAndImdbRatingComMeuMapLoop(watchList)[2]).toEqual({ "rating": "9.0", "title": "The Dark Knight" });
    })
    test('Deve Obter quarto objeto do array MAP personalizado forEach()', () => {
        expect(findTitleAndImdbRatingComMeuMapForEach(watchList)[3]).toEqual({ "rating": "8.3", "title": "Batman Begins" });
    })
})