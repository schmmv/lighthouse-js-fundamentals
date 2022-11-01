//function that counts the number of vowels in data. vowels considered a, e, i, o, u.
const numberOfVowels = function(data) {
  let vowelsFound = 0;
  for(let i = 0; i < data.length; i++) {
    let letter = data[i];
    if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u')
      vowelsFound++;
  }
  return vowelsFound;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));