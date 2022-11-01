const sumLargestNumbers = function(data) {
  let largestNum, secondLargestNum;
  if (data[1] > data[0]) {
    largestNum = data[1];
    secondLargestNum = data[0];
  } else {
    largestNum = data[0];
    secondLargestNum = data[1];
  }
  for(let i = 2; i < data.length; i++) {
    if(data[i] > largestNum) {
      secondLargestNum = largestNum;
      largestNum = data[i];
    } else if(data[i] > secondLargestNum) {
      secondLargestNum = data[i];
    }
  }
  return largestNum + secondLargestNum;

};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 10, 34, 6, 92, 2]));