// WAP to Find the Factors of a Number

const factors = (n) => {
    if (typeof n == "number") {
        for(let i=1; i<=n; i++){
            if(n%i == 0){
                console.log(`Factor : ${i}`)
            }
        }
    } else {
        console.log("Input should be valid number type")
    }
};

// factors(8);
// factors(5);
// factors(6);
// factors(9);
// factors(124);
factors('a');