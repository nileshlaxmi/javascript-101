// WAP to make a simple calculator

const calculator = (n1, n2, operator) => {
    if (typeof n1 == "number" && typeof n2 == "number") {
        switch (operator) {
            case '+':
                return n1 + n2

            case '-':
                return n1 - n2

            case '*':
                return n1 * n2

            case '/':
                return n1 / n2
            case '%':
                return n1 / n2
            default:
                return "Enter valid operator"
        }
    } else {
        return "Inputs should be valid number";
    }
};

console.log(calculator(8, 2, '+'));
console.log(calculator(5, 2, '-'));
console.log(calculator(6, 2, '*'));
console.log(calculator(9, 3, '/'));
console.log(calculator(124, 2, '%'));
console.log(calculator('a', 2, '+'));