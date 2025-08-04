// WAP to clone a JS object

const cloneObj = (obj) => {
    if (typeof obj === "object") {
        const obj1 = JSON.parse(JSON.stringify(obj))
        const obj2 = { ...obj }
        const obj3 = Object.assign({}, obj)

        // console.log(`Cloned Object 1 ${obj1}`);
        console.log(obj1);
        console.log(obj2);
        console.log(obj3);
        // console.log(`Cloned Object 2 ${obj2}`);
        // console.log(`Cloned Object 3 ${obj3}`);
    } else console.log("Input should be object type");
};

// cloneObj(8);
cloneObj({ a: "5" });
// cloneObj('a');