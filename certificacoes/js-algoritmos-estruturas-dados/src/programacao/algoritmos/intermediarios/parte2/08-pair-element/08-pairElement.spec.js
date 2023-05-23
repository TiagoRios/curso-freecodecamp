const { pairElement } = require('./08-pairElement.js')

  test('Deve retornar DNA pareado', () => {
    expect(pairElement("ATCGA"))
      .toEqual([["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]);
  }) 
  test('Deve retornar DNA pareado', () => {
    expect(pairElement("TTGAG"))
      .toEqual([["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]);
  }) 
  test('Deve retornar DNA pareado', () => {
    expect(pairElement("CTCTA"))
      .toEqual([["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]);
  })