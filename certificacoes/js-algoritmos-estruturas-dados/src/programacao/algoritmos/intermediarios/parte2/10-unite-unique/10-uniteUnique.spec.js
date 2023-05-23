const { uniteUnique } = require('./10-uniteUnique.js')

  test('Deve retornar array [1, 3, 2, 5, 4]', () => {
    expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
      .toEqual([1, 3, 2, 5, 4]);
  }) 
  test('Deve retornar array [1, 2, 3, 5]', () => {
    expect(uniteUnique([1, 2, 3], [5, 2, 1]))
      .toEqual([1, 2, 3, 5]);
  }) 
  test('Deve retornar array [1, 2, 3, 5, 4, 6, 7, 8]', () => {
    expect(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))
      .toEqual([1, 2, 3, 5, 4, 6, 7, 8]);
  }) 
  test('Deve retornar array [1, 3, 2, 5, 4, 6]', () => {
    expect(uniteUnique([1, 3, 2], [5, 4], [5, 6]))
      .toEqual([1, 3, 2, 5, 4, 6]);
  }) 
  test('Deve retornar array [1, 3, 2, 5, 4]', () => {
    expect(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]))
      .toEqual([1, 3, 2, 5, 4]);
  }) 
  test('Deve retornar array ["a", "b", "c"]', () => {
    expect(uniteUnique(["a", "b"], ["a", "b", "c"], ["c"], ["d"]))
      .toEqual(["a", "b", "c", "d"]);
  }) 