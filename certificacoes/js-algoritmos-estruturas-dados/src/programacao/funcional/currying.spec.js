function curriedAdd(x) {
  return function(y) {
    return x + y;
  }
}

const curriedAdd2 = x => y => x + y;

//Definindo valores default para evitar NaN quando não fornecer algum argumento.
const curriedAdd3 = (a=0) => (b=0) => (c=0) => (d=0) => a+b+c+d;

test('Deve retornar 3', () => {
  expect(curriedAdd(1)(2)).toEqual(3);
})
test('Deve retornar 3', () => {
  expect(curriedAdd2(1)(2)).toEqual(3);
})
test('Deve retornar NaN', () => {
  expect(curriedAdd(1)()).toEqual(NaN);
})
test('Deve retornar NaN', () => {
  expect(curriedAdd2()(5)).toEqual(NaN);
})
test('Deve retornar 5 quando não passar alguns argumentos', () => {
  expect(curriedAdd3(1)()(4)()).toEqual(5);
})