// Program to Swap Two Variables
const swapTwoVariables = (a, b) => {
  console.log(`Original Two Variable 1st=${a} 2nd=${b}`);
  let c;
  c = a;
  a = b;
  b = c;
  console.log(`Swap Two Variable 1st=${a} 2nd=${b}`);
};

swapTwoVariables(4,5)
swapTwoVariables("hello","world")
swapTwoVariables(1,100)
swapTwoVariables(9,99)
