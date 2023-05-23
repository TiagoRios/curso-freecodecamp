const { translatePigLatin } = require('./06-translatePigLatin.js');

describe('Deve traduzir para o Pig Latin e retornar', () => {
  test('String aliforniacay', () => {
    expect(translatePigLatin("california"))
      .toEqual('aliforniacay');
  })
  test('String aragraphspay', () => {
    expect(translatePigLatin("paragraphs"))
      .toEqual('aragraphspay');
  })
  test('String oveglay', () => {
    expect(translatePigLatin("glove"))
      .toEqual('oveglay');
  })
  test('String algorithmway', () => {
    expect(translatePigLatin("algorithm"))
      .toEqual('algorithmway');
  })
  test('String eightway', () => {
    expect(translatePigLatin("eight"))
      .toEqual('eightway');
  })
  test('String artzschway, quando primeira vogal vem no meio', () => {
    expect(translatePigLatin("schwartz"))
      .toEqual('artzschway');
  })
  test('String rhythmay, quando palavra não possuir vogais', () => {
    expect(translatePigLatin("rhythm"))
      .toEqual('rhythmay');
  })
})