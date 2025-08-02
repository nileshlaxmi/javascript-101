// WAP to to Empty an Array

const ar = [1, 2, 3];
console.log(ar);

const emptyAr = (ar) => {
    if (Array.isArray(ar)) {
        ar.length = 0
        return ar
    } else console.log("Input should be valid number type")

}

const emptyArray = (ar) => {
    if (Array.isArray(ar)) {
        ar = []
        return ar
    } else console.log("Input should be valid number type")
}

// call the function
const result = emptyAr(ar);
console.log(result);

const resultAr = emptyArray(ar);
console.log(resultAr);