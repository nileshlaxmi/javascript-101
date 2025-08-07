// WAP to check if an object is an array

const checkObj = (ar) => {
  if(Array.isArray(ar)){
    return "Array Type"
  } else 
  return "Not an array type"
};

console.log(checkObj([1,2,3,4]));
console.log(checkObj([]));
console.log(checkObj("xyz"));