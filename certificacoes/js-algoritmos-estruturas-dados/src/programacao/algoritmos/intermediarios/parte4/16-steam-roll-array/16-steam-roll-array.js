/**
 * Funcão que elimina todos os arrays internos.
 * 
 * @param {Array} arr O array que contém arrays internos.
 * @returns Um array sem arrays internos.
 */
function steamrollArray(arr) {
    let arrRetorno = [];
    arr.forEach(x => Array.isArray(x) ? arrRetorno.push(...steamrollArray(x)) : arrRetorno.push(x));
    return arrRetorno;
}

// 1ª solução do site.
function steamrollArray1(arr) {
    const flattenedArray = [];
    // Loop over array contents
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // Recursively flatten entries that are arrays
            //  and push into the flattenedArray
            flattenedArray.push(...steamrollArray(arr[i]));
        } else {
            // Copy contents that are not arrays
            flattenedArray.push(arr[i]);
        }
    }
    return flattenedArray;
};

// 2ª solução do site.
function steamrollArray2(arr) {
    const flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

// 3ª solução do site.
function steamrollArray3(arr) {
    return arr
        .toString()
        .replace(",,", ",") // "1,2,,3" => "1,2,3"
        .split(",") // ['1','2','3']
        .map(function (v) {
            if (v == "[object Object]") {
                // bring back empty objects
                return {};
            } else if (isNaN(v)) {
                // if not a number (string)
                return v;
            } else {
                return parseInt(v); // if a number in a string, convert it
            }
        });
}

module.exports = {
    steamrollArray
}