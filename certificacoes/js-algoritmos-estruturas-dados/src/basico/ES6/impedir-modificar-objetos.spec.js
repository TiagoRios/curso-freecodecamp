function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.1415
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

test('PI deve ter seu valor original inalterado', () => {
    expect(PI).toEqual(3.1415);
})
