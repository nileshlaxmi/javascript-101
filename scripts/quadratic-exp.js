// WAP to Solve Quadratic Equation

const quadraticExp = (a, b, c) => {
    if (typeof a == "number" && typeof b == "number" && typeof c == "number") {
        let root1, root2;
        let discriminant = b * b - 4 * a * c;
        if (discriminant > 0) {
            root1 = (-b) + Math.sqrt(discriminant) / 2 * a
            root1 = (-b) - Math.sqrt(discriminant) / 2 * a
            console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
        }
        else if (discriminant == 0) {
            root1 = root2 = (-b) / 2 * a;
            console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
        }
        else {

            let realPart = (-b / (2 * a)).toFixed(2);
            let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
            console.log(
                `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`)
        }

    } else console.log("Inputs should be number type");
};

quadraticExp(5, 6, 9);
quadraticExp(7, 9, 10);
quadraticExp("1", 9, 4);
quadraticExp("a", 9, 8);
