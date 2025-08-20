// program to print prime numbers between the two numbers

const printPrimeNumbers = (n) => {
    if (typeof n == "number") {
        console.log(`Prime numbers up to ${n}:`);
        findPrimes(n);
    } else {
        console.log("Input should be valid number type");
    }
};



const findPrimes = (n) => {
    for (let i = 1; i <= n; i++) {
        let flag = 0;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }

        if (i > 1 && flag == 0) {
            console.log(i);
        }
    }
}

printPrimeNumbers(20);