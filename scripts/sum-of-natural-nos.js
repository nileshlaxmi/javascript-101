// WAP to Find the Sum of Natural Numbers to Add Two Numbers

const sumOfNaturalNos = (num) => {
  if (typeof num == "number") {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum = sum + i;
    }
    return `Sum of natural numbers = ${sum}`
  } else return "Input should be number type";
};

console.log(sumOfNaturalNos(5));
console.log(sumOfNaturalNos(7));
console.log(sumOfNaturalNos("1"));
console.log(sumOfNaturalNos("a"));
