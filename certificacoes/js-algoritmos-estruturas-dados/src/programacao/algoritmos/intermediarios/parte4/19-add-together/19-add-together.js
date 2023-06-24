/**
 * Soma dois argumentos juntos. 
 * 
 * @returns A soma se for passado dois argumentos, uma função se 
 * for passado apenas um argumento, undefined se não for número válido.
 */
function addTogether() {
    if (arguments.length === 1 && Number.isInteger(arguments[0])) {
        return (x) => {
            if (Number.isInteger(x)) return arguments[0] + x;
        }
    } else if (arguments.length === 2 && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
        return arguments[0] + arguments[1];
    }

    return undefined;
}

/* As soluçãoes do site não funcionam nos meus testes. */

// 1ª solução do site.
function addTogether1() {
    const [first, second] = arguments;

    if (typeof (first) === "number") {
        if (typeof (second) === "number") return first + second;
        if (arguments.length === 1) return (second) => addTogether(first, second);
    }
}

// 2ª solução do site.
function addTogether2() {
    const [first, second] = arguments;
    // First argument is not a number
    if (typeof (first) !== "number") {
        return undefined;
    }
    // First argument is a number
    //  and second argument is not defined
    else if (arguments.length === 1) {
        function addSecond(second) {
            // New argument is not a number
            if (typeof (second) !== "number") {
                return undefined;
            }
            // New argument is a number
            else {
                return first + second;
            }
        }
        // Note: returning a *function*
        return addSecond;
    }
    // First argument is a number
    //  and second argument is not a number
    else if (typeof (second) !== "number") {
        return undefined;
    }
    // First argument is a number
    //  and second argument is a number
    else {
        return first + second;
    }
}


// 3ª solução do site. NaN também é um número precisa de ajuste.
function addTogether3() {
    const [first, second] = arguments;

    function addSecond(second) {
        if (typeof (second) === "number") return first + second;
    }

    if (typeof (first) === "number") {
        if (arguments.length === 1) return addSecond;
        if (arguments.length === 2) return addSecond(second);
    }
}

module.exports = {
    addTogether
}