// WAP to remove specific item from an array

const removeItem = (ar, n) => {
  const index = ar.indexOf(n)
  if(index != -1){
    ar.splice(index, 1)
  }
  return ar
};

console.log(removeItem([1,2,3,4], 3));