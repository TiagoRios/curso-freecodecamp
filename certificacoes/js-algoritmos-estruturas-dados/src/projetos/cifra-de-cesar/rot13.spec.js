const { rot13 } = require("./rot13")

test('deve decodificar "SERR PBQR PNZC" para "FREE CODE CAMP"', () => {
    expect(rot13("SERR PBQR PNZC")).toEqual("FREE CODE CAMP");
})

test('deve decodificar "SERR CVMMN!" para "FREE PIZZA!"', () => {
    expect(rot13("SERR CVMMN!")).toEqual("FREE PIZZA!");
})

test('deve decodificar "SERR YBIR?" para "FREE LOVE?"', () => {
    expect(rot13("SERR YBIR?")).toEqual("FREE LOVE?");
})

test('deve decodificar "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT." para "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."', () => {
    expect(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))
    .toEqual("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");
})
