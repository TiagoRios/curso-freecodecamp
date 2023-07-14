const { palindrome } = require("./palindrome");

test('deve retornar true para string "HaNnAh"', () => {
    expect(palindrome("HaNnAh")).toEqual(true);
})

test('deve retornar true para string " @ _Ha(ª.^)N nah "', () => {
    expect(palindrome(" @ _Ha(ª.^)N nah ")).toEqual(true);
})

test('deve retornar false para string "dog"', () => {
    expect(palindrome("dog")).toEqual(false);
})

test('deve retornar false para string "cat"', () => {
    expect(palindrome("cat")).toEqual(false);
})
