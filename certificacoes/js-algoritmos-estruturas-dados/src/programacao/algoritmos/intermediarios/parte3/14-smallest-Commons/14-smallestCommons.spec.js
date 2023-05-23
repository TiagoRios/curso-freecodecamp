const { smallestCommons } = require('./14-smallestCommons')

test('Deve retornar um número', () => {
  expect(typeof smallestCommons([1, 5]))
    .toEqual('number');
}) 
test('Deve retornar 60 array ordem crescente', () => {
  expect(smallestCommons([1, 5]))
    .toEqual(60);
}) 
test('Deve retornar 60 array ordem decrescente', () => {
  expect(smallestCommons([5, 1]))
    .toEqual(60);
}) 
test('Deve retornar 2520', () => {
  expect(smallestCommons([2, 10]))
    .toEqual(2520);
}) 
test('Deve retornar 360360', () => {
  expect(smallestCommons([1, 13]))
    .toEqual(360360);
}) 
test('Deve retornar 6056820', () => {
  expect(smallestCommons([23, 18]))
    .toEqual(6056820);
})