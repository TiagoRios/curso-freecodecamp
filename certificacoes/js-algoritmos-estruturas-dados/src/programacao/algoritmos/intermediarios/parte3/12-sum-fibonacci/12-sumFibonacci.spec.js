const { sumFibonacci } = require('./12-sumFibonacci.js')

  test('Deve retornar um número', () => {
    expect(typeof sumFibonacci(1))
      .toEqual('number');
  }) 
  test('Deve retornar número 1785', () => {
    expect(sumFibonacci(1000))
      .toEqual(1785);
  }) 
  test('Deve retornar número 4613732', () => {
    expect(sumFibonacci(4000000))
      .toEqual(4613732);
  }) 
  test('Deve retornar número 5', () => {
    expect(sumFibonacci(4))
      .toEqual(5);
  }) 
  test('Deve retornar número 60696', () => {
    expect(sumFibonacci(75024))
      .toEqual(60696);
  }) 
  test('Deve retornar número 135721', () => {
    expect(sumFibonacci(75025))
      .toEqual(135721);
  }) 
