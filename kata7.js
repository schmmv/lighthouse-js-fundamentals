//Function that compares the fraction of air samples in an array that are dirty, and compares it to a threshold. 
//If it is below threshold "Clean" is returned, otherwise "Polluted" is returned.
const checkAir = function (samples, threshold) {
  let numOfDirty = 0;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === "dirty")
      numOfDirty++;
  }
  
  const fractionPolluted = numOfDirty / samples.length;
  
  if (fractionPolluted < (threshold))
    return "Clean";
  else
    return "Polluted";

};



console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))