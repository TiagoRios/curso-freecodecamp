const { whatIsInAName } = require('./04-whatIsInAName.js');

describe('Deve retornar', () => {
  test('Array', () => {
    expect(Array.isArray(whatIsInAName([
      { "a": 1, "b": 1234, "c": 3 }],
      { "a": 1, "b": 9999, "c": 3 }))).toEqual(true);
  })
  test('Array [] quando não houver correspondências', () => {
    expect(whatIsInAName([
      { "a": 1, "b": 1234, "c": 3 }],
      { "a": 1, "b": 9999, "c": 3 })).toEqual([]);
  })
  test('Array [] quando não houver correspondências', () => {
    expect(whatIsInAName([
      { "a": 1, "b": 2222, "c": 3 }],
      { "a": 1, "b": 9999, "c": 3, "d": 9999 })).toEqual([]);
  })
  test('Array [{ first: "Tybalt", last: "Capulet" }]', () => {
    expect(whatIsInAName([
      { first: "Mercutio", last: null },
      { first: "Romeo", last: "Montague" },
      { first: "Tybalt", last: "Capulet" }],
      { last: "Capulet" }))
      .toEqual([
        { first: "Tybalt", last: "Capulet" }]);
  })
  test('Array com 1 objeto(s) localizado(s)', () => {
    expect(whatIsInAName([
      { "apple": 1, "bat": 2 },
      { "apple": 1 },
      { "apple": 1, "bat": 2, "cookie": 2 }],
      { "apple": 1, "cookie": 2 }))
      .toEqual([
        { "apple": 1, "bat": 2, "cookie": 2 }]);
  })
  test('Array com 3 objeto(s) localizado(s)', () => {
    expect(whatIsInAName([
      { "apple": 1 },
      { "apple": 1 },
      { "apple": 1, "bat": 2 }],
      { "apple": 1 }))
      .toEqual([
        { "apple": 1 },
        { "apple": 1 },
        { "apple": 1, "bat": 2 }]);
  })
})