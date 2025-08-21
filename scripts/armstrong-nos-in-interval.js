// program to find Armstrong number between intervals

const printArmstrongNumbers = (n) => {
    if (typeof n == "number") {
        console.log(`Armstrong numbers up to ${n}:`);
        findArmstrongNumber(n);
    } else {
        console.log("Input should be valid number type");
    }
};

const findArmstrongNumber = (n) => {
for (let i = 1; i <= n; i++) {
    let numberOfDigits = i.toString().length;
    let sum = 0;
    let temp = i;

    while (temp > 0) {

        let remainder = temp % 10;
        sum += remainder ** numberOfDigits;
        temp = parseInt(temp / 10); 
    }
 
    if (sum == i) {
        console.log(i);
    }
}
}

printArmstrongNumbers(200);