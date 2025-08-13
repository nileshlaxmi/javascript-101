// WAP to sort array by property name

const sortArrayOfObjects = (ar, key) => {
    if (Array.isArray(ar)) {
        ar = ar?.sort((obj1,obj2) => {
            return obj1?.name - obj2?.name
        })
        return `Sorted Array Of Objects => ${ar}`
    } else
        return "Not an array type"
};

console.log(sortArrayOfObjects([{ name: 'Jack', age: 26}, {name: 'Jill', gender: 'male' }, {name: 'Zebra', gender: 'male' }]));
console.log(sortArrayOfObjects([]));
console.log(sortArrayOfObjects([]));
console.log(sortArrayOfObjects("xyz"));