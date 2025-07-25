// WAP to Set a Default Parameter Value For a Function

const defaultParamFn = (a=5) => {
  return a
};

console.log(defaultParamFn());
console.log(defaultParamFn(6));