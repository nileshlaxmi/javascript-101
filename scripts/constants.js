// Program to work with constants
const HELLO_WORLD_TXT = "hello world";
const PI_NO = 3.14;
const ar = [1, 2, 3];

const constantFunc = () => {
  console.log(HELLO_WORLD_TXT);
  console.log(PI_NO);
  console.log(ar);
  ar[1] = 5;
  ar[3] = 6;
  console.log(ar);
};

constantFunc();
