// WAP to check an Armstrong number of three digits

const armstrongNo = (num) => {
  let sum = 0;
  let numberOfDigits = num?.length;
  let temp = num;
  while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder ** numberOfDigits;
    temp = parseInt(temp / 10);
  }
  if (temp === num) {
    console.log(`${num} is an Armstrong number`);
  } else {
    console.log(`${num} is not an Armstrong number.`);
  }
};

armstrongNo(153);
armstrongNo(125);
armstrongNo("1");
armstrongNo("a");