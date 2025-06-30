// 30-6-25

// JavaScript Program to Add Two Numbers
const addTwoNos = (a, b) => {
  if (typeof a == "number" && typeof b == "number") return a + b;
  else return "Input should be numbers";
};

console.log(addTwoNos(5, 6));
console.log(addTwoNos(7, 9));
console.log(addTwoNos("1", 9));
console.log(addTwoNos("a", 9));
