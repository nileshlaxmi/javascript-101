// WAP to Check if a number is Positive, Negative, or Zero

const checkInteger = (num) => {
  if (typeof num == "number") {
    if(num === 0){
        return "Input is 0";
    }
    return num > 0 ? "Input is +ve type" : "Input is -ve type" }
  else return "Input should be number type";
};

console.log(checkInteger(45));
console.log(checkInteger(0));
console.log(checkInteger(-5));
console.log(checkInteger("1"));
console.log(checkInteger("a"));
