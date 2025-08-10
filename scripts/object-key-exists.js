// WAP to Check if a Key Exists in an Object

const ifKeyExists = (obj, key) => {
    if (typeof obj === "object") {
        if(Object.hasOwnProperty(key))
        return `key => ${key} exists`
    } else
        return "Not an object type"
};

console.log(ifKeyExists({ name: 'Jack', age: 26, gender: 'male' }, 'name'));
console.log(ifKeyExists([]));
console.log(ifKeyExists([]));
console.log(ifKeyExists("xyz"));