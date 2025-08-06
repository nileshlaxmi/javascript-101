// WAP to replace all instances of a character in a string

const replaceChar = (str) => {
  const replaceStr = str.replace(/a/g, 'A')
  return replaceStr
};

console.log(replaceChar("WAP to replace all instances of a character in a string"));