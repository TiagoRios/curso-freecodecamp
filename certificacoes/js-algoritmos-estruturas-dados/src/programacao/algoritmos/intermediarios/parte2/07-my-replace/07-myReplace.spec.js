const { myReplace } = require('./07-myReplace.js');

describe('Deve procurar e substituir', () => {
  test('"store" por "mail" - Retornar string: Let us go to the mall', () => {
    expect(myReplace("Let us go to the store", "store", "mall"))
      .toEqual('Let us go to the mall');
  }) 
  test('"Sleeping" por "Sitting" - Retornar string: He is Sitting on the couch', () => {
    expect(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
      .toEqual('He is Sitting on the couch');
  })
  test('"up" por "down" - Retornar string: I think we should look down there', () => {
    expect(myReplace("I think we should look up there", "up", "Down"))
      .toEqual('I think we should look down there');
  })
  test('"spellngi" por "spelling" - Retornar string: This has a spelling error', () => {
    expect(myReplace("This has a spellngi error", "spellngi", "spelling"))
      .toEqual('This has a spelling error');
  })
  test('"Tom" por "John" - Retornar string: His name is John', () => {
    expect(myReplace("His name is Tom", "Tom", "john"))
      .toEqual('His name is John');
  })
  test('"Coding", "Algorithms" - Retornar string: Let us get back to more Algorithms', () => {
    expect(myReplace("Let us get back to more Coding", "Coding", "algorithms"))
      .toEqual('Let us get back to more Algorithms');
  })
})