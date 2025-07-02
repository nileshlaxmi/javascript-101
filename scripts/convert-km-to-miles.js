// JavaScript Program to Convert Km to Miles
const convertKmToMiles = (distance) => {
  if (typeof distance == "number") return "Miles = " + (distance * 0.621371)?.toFixed(2);
  else return "Distance should be number";
};

console.log(convertKmToMiles(5));
console.log(convertKmToMiles(9));
console.log(convertKmToMiles("1"));
console.log(convertKmToMiles("a"));
