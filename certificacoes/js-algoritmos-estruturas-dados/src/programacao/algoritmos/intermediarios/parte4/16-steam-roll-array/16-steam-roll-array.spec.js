const {steamrollArray} = require('./16-steam-roll-array');
 
test('deve retornar ["a", "b"]', () => {
    expect(steamrollArray([[["a"]], [["b"]]]))
      .toEqual(["a", "b"]);
})

test('deve retornar [1, 2, 3, 4]', () => {
    expect(steamrollArray([1, [2], [3, [[4]]]]))
      .toEqual([1, 2, 3, 4]);
})

test('deve retornar [1, 3, 4]', () => {
    expect(steamrollArray([1, [], [3, [[4]]]]))
      .toEqual([1, 3, 4]);
})

test('deve retornar [1, {}, 3, 4]', () => {
    expect(steamrollArray([1, {}, [3, [[4]]]]))
      .toEqual([1, {}, 3, 4]);
})

// A solução não deve usar os métodos Array.prototype.flat() ou Array.prototype.flatMap().
// As variáveis globais não devem ser utilizadas.