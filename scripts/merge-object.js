// WAP to merge property of two objects

const mergeObj = (obj1, obj2) => {
    if (typeof obj1 === "object" && typeof obj2 === "object") {
        return {...obj1, ...obj2}
        // return Object.assign(obj1, obj2)
    } else
        return "Not an object type"
};

console.log(mergeObj({ name: 'Jack', age: 26}, { gender: 'male' }));
console.log(mergeObj([]));
console.log(mergeObj([]));
console.log(mergeObj("xyz"));