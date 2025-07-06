// WAP to Check if a Number is Odd or Even

const checkOddEven = (num) => {
  if (typeof num == "number") {
    if (num % 2 == 0) {
      return "Input is even";
    } else return "Input is odd";
  } else return "Input should be number type";
};

console.log(checkOddEven(45));
console.log(checkOddEven(10));
console.log(checkOddEven(-56));
console.log(checkOddEven("1"));
console.log(checkOddEven("a"));
