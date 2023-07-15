const { telephoneCheck } = require("./telephone-check")

describe('deve retornar "true" para:', () => {
  test('555-555-5555', () => {
    expect(telephoneCheck("555-555-5555")).toEqual(true)
  })

  test('5555555555', () => {
    expect(telephoneCheck("5555555555")).toEqual(true)
  })

  test('555-555-5555', () => {
    expect(telephoneCheck("555-555-5555")).toEqual(true)
  })

  test('(555)555-5555', () => {
    expect(telephoneCheck("(555)555-5555")).toEqual(true)
  })

  test('1 456 789 4444', () => {
    expect(telephoneCheck("1 456 789 4444")).toEqual(true)
  })

  test('1 555-555-5555', () => {
    expect(telephoneCheck("1 555-555-5555")).toEqual(true)
  })

  test('1(555)555-5555', () => {
    expect(telephoneCheck("1(555)555-5555")).toEqual(true)
  })

  test('1 (555) 555-5555', () => {
    expect(telephoneCheck("1 (555) 555-5555")).toEqual(true)
  })

})

describe('deve retornar "false" para:', () => {
  test('55 55-55-555-5', () => {
    expect(telephoneCheck("55 55-55-555-5")).toEqual(false)
  })

  test('(555)5(55?)-5555', () => {
    expect(telephoneCheck("(555)5(55?)-5555")).toEqual(false)
  })

  test('1 (555)5(55?)-5555', () => {
    expect(telephoneCheck("1 (555)5(55?)-5555")).toEqual(false)
  })

  test('(555-555-5555', () => {
    expect(telephoneCheck("(555-555-5555")).toEqual(false)
  })
  test('555)-555-5555', () => {
    expect(telephoneCheck("555)-555-5555")).toEqual(false)
  })

  test('2(757)622-7382', () => {
    expect(telephoneCheck("2(757)622-7382")).toEqual(false)
  })

  test('27576227382', () => {
    expect(telephoneCheck("27576227382")).toEqual(false)
  })

  test('-1 (757) 622-7382', () => {
    expect(telephoneCheck("-1 (757) 622-7382")).toEqual(false)
  })

  test('55555555', () => {
    expect(telephoneCheck("55555555")).toEqual(false)
  })

  test('123**&!!asdf#', () => {
    expect(telephoneCheck("123**&!!asdf#")).toEqual(false)
  })

  test('1 555)555-5555', () => {
    expect(telephoneCheck("1 555)555-5555")).toEqual(false)
  })

  test('1 234 567 890O final letra = "O"', () => {
    expect(telephoneCheck("1 234 567 890O")).toEqual(false)
  })
})