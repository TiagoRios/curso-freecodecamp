const { diffArray } = require('./02-diffArray.js');

describe('Deve retornar um Array', () => {
  test('', () => {
    expect(Array.isArray(diffArray([1, 4], [1, 'texto', 4]))).toEqual(true);
  })

  describe('Quando identicos:', () => {
    test('Array vazio []', () => {
      expect(diffArray(['a'], ['a'])).toEqual([]);
    })
    test('zer0 elementos', () => {
      expect(diffArray(['a', 1], ['a', 1])).toHaveLength(0);
    })
  })

  describe('Quando diferentes:', () => {
    test("Todos os elementos - array com todos elementos diferentes", () => {
      expect(diffArray(['a'], ['b'])).toEqual(['a', 'b']);
    })
    test('Array com uma diferença', () => {
      expect(diffArray([], ['b'])).toEqual(['b']);
    })
    test('Array com uma diferença tamanho igual a 1', () => {
      expect(diffArray([], ['b'])).toHaveLength(1);
    })
    test('Array com duas diferenças', () => {
      expect(diffArray(['a'], [100, 'a', 'b'])).toEqual([100, 'b']);
    })
    test('Array com duas diferenças tamanho igual a 2', () => {
      expect(diffArray(['a'], [100, 'a', 'b'])).toHaveLength(2);
    })
  })
})