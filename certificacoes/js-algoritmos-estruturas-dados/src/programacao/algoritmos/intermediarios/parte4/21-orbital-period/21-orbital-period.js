function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const arrRetorno = [];

    for (let elem in arr) {
        let formula = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + arr[elem].avgAlt, 3) / GM))
        arrRetorno.push({ name: arr[elem].name, orbitalPeriod: formula })
    }

    return arrRetorno;
}

// 1ª solução do site.
function orbitalPeriod1(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const a = 2 * Math.PI;
    const newArr = [];

    const getOrbPeriod = function (obj) {
        const c = Math.pow(earthRadius + obj.avgAlt, 3);
        const b = Math.sqrt(c / GM);
        const orbPeriod = Math.round(a * b);
        // create new object
        return { name: obj.name, orbitalPeriod: orbPeriod };
    };

    for (let elem in arr) {
        newArr.push(getOrbPeriod(arr[elem]));
    }

    return newArr;
}

// 2ª igual a minha.

// 4ª solução do site.
function orbitalPeriod4(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;

    return arr.map(({ name, avgAlt }) => {
        const earth = earthRadius + avgAlt;
        const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3) / GM));
        return { name, orbitalPeriod };
    });
}


// MelBrooksKA, usuário do freecodecamp.
function orbitalPeriodMelBrooksKA(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    arr.forEach(function (item) {
        // Calculate the Orbital period
        //Add orbitalPeriod property
        item.orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM));;
        //Delete the avgAlt property
        delete item.avgAlt;
    });
    return arr;
}

// sfiden72
function orbitalPeriodSfiden72(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    return arr.map((e) => ({
        name: e.name,
        orbitalPeriod: Math.round((2 * Math.PI) * Math.sqrt(Math.pow(earthRadius + e.avgAlt, 3) / GM))
    }));
}

module.exports = {
    orbitalPeriod
}