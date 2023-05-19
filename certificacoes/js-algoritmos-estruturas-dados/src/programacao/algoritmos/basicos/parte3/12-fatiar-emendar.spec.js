const { fatiarEmendar } = require('./12-fatiar-emendar.js');

const arr1 = [1, 2, 3];
const arr2 =  [4, 5];

test('Deve retornar um array', () => {
    expect(Array.isArray(fatiarEmendar([2,3],[0,1,4,5], 2))).toBe(true);
});
test('Deve retornar o array [4, 1, 2, 3, 5]', () => {
    expect(fatiarEmendar([1, 2, 3], [4, 5], 1)).toEqual([4, 1, 2, 3, 5]);
});
test('Deve retornar o array ["a", 1, 2, "b"]', () => {
    expect(fatiarEmendar([1, 2], ["a", "b"], 1)).toEqual(["a", 1, 2, "b"]);
});
test('Deve retornar o array na ordem original', () => {
    expect(fatiarEmendar([1, 2, 3, 4], [], 0)).toEqual([1, 2, 3, 4]);
});
test('Arrays originais não devem ser modificados', () => {
    let copiaArray1 = [...arr1];
    let copiaArray2 = [...arr2];
    fatiarEmendar(arr1, arr2, 1)
    expect(arr1).toEqual(copiaArray1);
    expect(arr2).toEqual(copiaArray2);
});