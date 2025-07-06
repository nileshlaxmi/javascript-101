// WAP to print multiplication of a number

const printMultiplication = (num) => {
  if (typeof num == "number") {
    let res = 1;
    for (let i = 1; i <= 10; i++) {
      res = i * num;
      console.log(`${num} * ${i} = ${res}`);
    }
  } else console.log("Input should be number type");
};

printMultiplication(3)
printMultiplication(5)
printMultiplication(10)
printMultiplication("1")
printMultiplication("a")
