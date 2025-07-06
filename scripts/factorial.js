// WAP to Find the Factorial of a Number

const findFactorial = (num) => {
  if (typeof num == "number") {
    let prod = 1;
    for (let i = 1; i <= num; i++) {
      prod = prod * i;
    }
    return `Factorial of a number = ${prod}`;
  } else return "Input should be number type";
};

console.log(findFactorial(3));
console.log(findFactorial(5));
console.log(findFactorial(10));
console.log(findFactorial("1"));
console.log(findFactorial("a"));
