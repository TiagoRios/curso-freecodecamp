const { spinalCase } = require('./05-spinalCase.js');

describe('Deve retornar uma string Hifenizada quando palavras', () => {
  test('Separadas por espaços', () => {
    expect(spinalCase("This Is Spinal Tap"))
      .toEqual('this-is-spinal-tap');
  })
  test('Juntas - grudadas', () => {
    expect(spinalCase("ThisIsSpinalTap"))
      .toEqual('this-is-spinal-tap');
  })
  test('Com Underscore', () => {
    expect(spinalCase("This_Is_Spinal_Tap"))
      .toEqual('this-is-spinal-tap');
  })
  test('Com Underscore', () => {
    expect(spinalCase("Teletubbies say Eh-oh"))
      .toEqual('teletubbies-say-eh-oh');
  })
})