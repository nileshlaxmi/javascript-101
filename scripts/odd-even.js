// 30-6-25

// Program to Check if a Number is Odd or Even
const checkOddEven = (num) => {
  if (typeof num == "number") return num % 2 == 0 ? "Even" : "Odd";
  else return "Not a number";
};

console.log(checkOddEven(10));
console.log(checkOddEven(5));
console.log(checkOddEven(6));
console.log(checkOddEven(9));
console.log(checkOddEven(124));
console.log(checkOddEven(567));
console.log(checkOddEven(100));
console.log(checkOddEven(55));
console.log(checkOddEven('a'));
console.log(checkOddEven('1'));
