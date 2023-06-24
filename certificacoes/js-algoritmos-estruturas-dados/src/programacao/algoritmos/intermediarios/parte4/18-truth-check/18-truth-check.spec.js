const { truthCheck } = require('./18-truth-check');

test('deve retornar false - Quando comparar true e false', () => {
  expect(truthCheck([
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true }], "isBot"))
    .toEqual(false);
})

test('deve retornar true - Quando todos Strings', () => {
  expect(truthCheck([
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true }], "name"))
    .toEqual(true);
})

test('deve retornar false - Quando comparar String com String vázia', () => {
  expect(truthCheck([
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true }], "role"))
    .toEqual(false);
})

test('deve retornar true - Quando comparar numeros', () => {
  expect(truthCheck([
    { name: "Pikachu", number: 25, caught: 3 },
    { name: "Togepi", number: 175, caught: 1 }], "number"))
    .toEqual(true);
})

test('deve retornar false - Quando comparar com numero zero', () => {
  expect(truthCheck([
    { name: "Pikachu", number: 25, caught: 3 },
    { name: "Togepi", number: 175, caught: 1 },
    { name: "MissingNo", number: NaN, caught: 0 }], "caught"))
    .toEqual(false);
})

test('deve retornar false - Quando comparar NaN com numero', () => {
  expect(truthCheck([
    { name: "Pikachu", number: 25, caught: 3 },
    { name: "Togepi", number: 175, caught: 1 },
    { name: "MissingNo", number: NaN, caught: 0 }], "number"))
    .toEqual(false);
})

test('deve retornar false - Quando não possuir propriedade', () => {
  expect(truthCheck([
    { name: "Quincy", username: "QuincyLarson" },
    { name: "Naomi", username: "nhcarrigan" },
    { name: "Camperbot" }], "username"))
    .toEqual(false);
})

test('deve retornar true - Quando todos array', () => {
  expect(truthCheck([
    { name: "freeCodeCamp", users: [{ name: "Quincy" }, { name: "Naomi" }] },
    { name: "Code Radio", users: [{ name: "Camperbot" }] },
    { name: "", users: [] }], "users"))
    .toEqual(true);
})

test('deve retornar true - Quando todos objetos', () => {
  expect(truthCheck([
    { id: 1, data: { url: "https://freecodecamp.org", name: "freeCodeCamp" } },
    { id: 2, data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" } },
    { id: null, data: {} }], "data"))
    .toEqual(true);
})

test('deve retornar false - Quando comparar null com numero', () => {
  expect(truthCheck([
    { id: 1, data: { url: "https://freecodecamp.org", name: "freeCodeCamp" } },
    { id: 2, data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" } },
    { id: null, data: {} }], "id"))
    .toEqual(false);
})