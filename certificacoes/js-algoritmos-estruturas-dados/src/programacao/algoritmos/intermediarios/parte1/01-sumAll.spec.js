const { sumAll } = require('./01-sumAll.js');

test('um número', () => {
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
  test('Array com mais de dois nmeros', () => {
    expect(sumAll([10, 5, 7, 8])).toEqual(45);
  })
})