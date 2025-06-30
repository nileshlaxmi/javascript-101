// 30-6-25

// JavaScript Program to Find the Square Root
const sqrtNo = (num) => {
  if (typeof num == "number" ) return Math.sqrt(num);
  else return "Input should be number type";
};

console.log(sqrtNo(4));
console.log(sqrtNo(9));
console.log(sqrtNo("1"));
console.log(sqrtNo(5));
