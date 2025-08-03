// WAP to Convert Objects to Strings

const stringifyObjects = (obj) => {
    if (typeof obj === "object") {
        const str = JSON.stringify(obj)
        console.log(`String ${str}`);
        console.log("typeof " + typeof str)
    } else console.log("Input should be object type");
};

stringifyObjects(8);
stringifyObjects({ a: "5" });
stringifyObjects('a');