//function that replaces whitespaces with "%20", excluding leading or trailing whitespace, which is removed
const urlEncode = function(text) {
  let char = 0;
  let newString = "";
  while(text[char] === " ") {
    char++;
  }
  let newLength = text.length - 1;
  while(text[newLength] === " ") {
    newLength--;
  }
  for(let i = char; i <= newLength; i++) {
    if(text[i] === " ") {
      newString += "%20";
    }else {
      newString += text[i];
    }
  }
  return newString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));