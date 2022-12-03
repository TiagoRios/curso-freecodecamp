const { fearNotLetter } = require('./09-fear-not-letter.js')

  test('Deve retornar string d', () => {
    expect(fearNotLetter("abce"))
      .toEqual('d');
  }) 
  test('Deve retornar string i', () => {
    expect(fearNotLetter("abcdefghjklmno"))
      .toEqual('i');
  })
  test('Deve retornar string u', () => {
    expect(fearNotLetter("stvwx"))
      .toEqual('u');
  })
  test('Deve retornar string e', () => {
    expect(fearNotLetter("bcdf"))
      .toEqual('e');
  })
  test('Deve retornar undefined', () => {
    expect(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))
      .toEqual(undefined);
  })