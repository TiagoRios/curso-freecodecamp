const { addTogether } = require('./19-add-together');

test('deve retornar 5', () => {
  expect(addTogether(2, 3))
    .toEqual(5);
})

test('deve retornar 53', () => {
  expect(addTogether(23, 30))
    .toEqual(53);
})

test('deve retornar undefined - Quando String', () => {
  expect(addTogether("2", 3))
    .toEqual(undefined);
})

test('deve retornar undefined - Quando undefined', () => {
  expect(addTogether(5, undefined))
    .toEqual(undefined);
})

test('deve retornar undefined - Quando String', () => {
  expect(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"))
    .toEqual(undefined);
})

test('deve retornar uma função', () => {
  expect(typeof (addTogether(5)))
  .toEqual("function");
})

test('deve retornar 12', () => {
  expect(addTogether(5)(7))
    .toEqual(12);
})

test('deve retornar undefined  - Quando Array', () => {
  expect(addTogether(2)([3]))
    .toEqual(undefined);
})

test('deve retornar undefined - Quando String', () => {
  expect(addTogether(2, "3"))
    .toEqual(undefined);
})

test('deve retornar undefined - Quando NaN', () => {
  expect(addTogether(NaN, NaN))
    .toEqual(undefined);
})