// WAP to replace all instances of a character in a string

const replaceChar = (str) => {
  const replaceStr = str.replace(/a/g, 'A')
  return replaceStr
};

const replaceCharTwo = (str) => {
  const replaceStr = str.split('a')
  return replaceStr.join('A')
};

console.log(replaceChar("WAP to replace all instances of a character in a string"));
console.log(replaceCharTwo("WAP to replace all instances of a character in a string"));