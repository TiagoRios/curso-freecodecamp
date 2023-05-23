const { sumAll } = require('./01-sumAll.js');

test('Deve retornar um número', () => {
  expect(typeof sumAll([1, 4])).toEqual('number');
})
describe('Deve retornar a soma de um intervalo de números', () => {
  test('Ordem crescente', () => {
    expect(sumAll([1, 4])).toEqual(10);
  })
  test('Ordem crescente', () => {
    expect(sumAll([5, 10])).toEqual(45);
  })
  test('Ordem decrescente', () => {
    expect(sumAll([4, 1])).toEqual(10);
  })
  test('Ordem decrescente', () => {
    expect(sumAll([10, 5])).toEqual(45);
  })
  test('Array com mais de dois numeros', () => {
    expect(sumAll([10, 8, 5, 7])).toEqual(45);
  })
})