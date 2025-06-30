// 30-6-25

// JavaScript Program to Find the Area of a Triangle
const area = (base, height) => {
  if (typeof base == "number" && typeof height == "number" ) return "Area of a Triangle " + (base * height) / 2;
  else return "Inputs should be number type";
};

console.log(area(4, 8));
console.log(area(9, 5));
console.log(area("1", 8));
console.log(area(5, 2));
