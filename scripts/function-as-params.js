// WAP to Pass a Function as Parameter


const dummyFn = () => {
    return "Hello"
}

const functionParams = (txt, fnc) => {
    const value = fnc()
    console.log(`${value} ${txt}`)
};

functionParams('world', dummyFn);
