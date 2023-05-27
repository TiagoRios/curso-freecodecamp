const { dropElements } = require('./15-dropElements')

test('Deve retornar [3, 4]', () => {
  expect(dropElements([1, 2, 3, 4], (n) => n >= 3))
    .toEqual([3, 4]);
}) 
test('Deve retornar [1, 0, 1]', () => {
  expect(dropElements([0, 1, 0, 1], (n) => n === 1))
    .toEqual([1, 0, 1]);
}) 
test('Deve retornar [1, 2, 3]', () => {
  expect(dropElements([1, 2, 3], (n) => n > 0))
    .toEqual([1, 2, 3]);
}) 
test('Deve retornar []', () => {
  expect(dropElements([1, 2, 3, 4], (n) => n > 5))
    .toEqual([]);
}) 
test('Deve retornar [7, 4]', () => {
  expect(dropElements([1, 2, 3, 7, 4], (n) => n > 3))
    .toEqual([7, 4]);
}) 
test('Deve retornar [3, 9, 2]', () => {
  expect(dropElements([1, 2, 3, 9, 2], (n) => n > 2))
    .toEqual([3, 9, 2]);
}) 