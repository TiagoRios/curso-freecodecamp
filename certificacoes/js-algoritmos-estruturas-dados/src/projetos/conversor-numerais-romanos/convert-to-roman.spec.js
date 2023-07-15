const { convertToRoman } = require("./convert-to-roman")

test('Deve retornar "III", para 3', () => {
    expect(convertToRoman(3)).toEqual("III")
})

test('Deve retornar "XXXVI", para 36', () => {
    expect(convertToRoman(36)).toEqual("XXXVI")
})

test('Deve retornar "XCIX", para 99', () => {
    expect(convertToRoman(99)).toEqual("XCIX")
})

test('Deve retornar "DCXLIX", para 649', () => {
    expect(convertToRoman(649)).toEqual("DCXLIX")
})

test('Deve retornar "DCCXCVIII", para 798', () => {
    expect(convertToRoman(798)).toEqual("DCCXCVIII")
})

test('Deve retornar "M", para 1000', () => {
    expect(convertToRoman(1000)).toEqual("M")
})

test('Deve retornar "MMMCMXCIX", para 3999', () => {
    expect(convertToRoman(3999)).toEqual("MMMCMXCIX")
})