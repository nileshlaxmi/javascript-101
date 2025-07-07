// WAP to check an Armstrong number of three digits

const armstrongNo = (num) => {
  let sum = 0;
  let noOfDigits = num?.length;
  let temp = num;
  while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder ** numberOfDigits;
    temp = parseInt(temp / 10);
  }
  if (temp === num) {
    console.log(`${number} is an Armstrong number`);
  } else {
    console.log(`${number} is not an Armstrong number.`);
  }
};
