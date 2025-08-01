// WAP to Check If a Variable is of Function Type

const dummyFn = () => {}

const functionType = (n) => {
    console.log(`Input is ${typeof n} type`)
};

functionType(8);
functionType(dummyFn);
functionType(6);
functionType(9);
functionType(124);
functionType('a');

