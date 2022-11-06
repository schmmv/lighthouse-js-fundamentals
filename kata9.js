//Function that turns an input string into camelCase, ie all words after the first word start with an upper case letter
const camelCase = function(input) {
  
  const wordArray = input.split(" ");
  
  for (let i = 1; i < wordArray.length; i++) {
    let camelWord = wordArray[i][0].toUpperCase();
    for (let j = 1; j < wordArray[i].length; j++) {
      camelWord += wordArray[i][j];
    }
    wordArray[i] = camelWord;
  }
  
  return wordArray.join("");

};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

