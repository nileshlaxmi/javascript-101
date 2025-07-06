// WAP to Check Prime Number

const checkPrime = (num) => {
  if (typeof num == "number" && num > 0 ) {
    let counter = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i == 0) {
        counter++;
      }
    }
    
    if (counter == 2) {
      return "Input is prime number";
    } else return "Input is composite number";
  } else return "Input should be valid number";
};

console.log(checkPrime(13));
console.log(checkPrime(10));
console.log(checkPrime(-7));
console.log(checkPrime("1"));
console.log(checkPrime("a"));
