// WAP to generate fibonacci series up to n terms

const fibonacci = (n) => {
    if (typeof n == "number") {
        let a = -1, b=1
        console.log(`Fibonacci Series`)
        for(let i=1; i<=n; i++){
            let c = a+b
            console.log(`${c}`)
            a=b
            b=c
        }
    } else {
        console.log("Input should be valid number type")
    }
};

fibonacci(10);