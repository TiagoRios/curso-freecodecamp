const { destroyer } = require('./03-destroyer.js');

test('Deve retornar um Array', () => {
  expect(Array.isArray(destroyer([1, 'a', 'bc'], 'a', 1))).toEqual(true);
})
test('Deve retornar []', () => {
  expect(destroyer([2, 3, 2, 3], 2, 3)).toEqual([]);
})
test('Deve retornar [1, 1]', () => {
  expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1]);
})
test('Deve retornar [1, 5, 1]', () => {
  expect(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)).toEqual([1, 5, 1]);
})
test('Deve retornar ["hamburger"]', () => {
  expect(destroyer(["tree", "hamburger", 53], "tree", 53)).toEqual(["hamburger"]);
})