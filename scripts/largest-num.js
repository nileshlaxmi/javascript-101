// WAP to Find the Largest Among Three Numbers

const largestNo = (a, b, c) => {
  if (typeof a == "number" && typeof b == "number" && typeof c == "number") {
    const max = Math.max(a, b, c);
    return `${max} is largest`
  } else return "Inputs should be number type";
};

// const largestNo = (a, b, c) => {
//   if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
//     const ar = [a, b, c];
//     ar.sort((a, b) => a - b);
//     return `${ar[2]} is largest`;
//   } else return "Inputs should be number type";
// };

console.log(largestNo(5, 6, 9));
console.log(largestNo(7, 9, 10));
console.log(largestNo("1", 9, 4));
console.log(largestNo("a", 9, 8));
