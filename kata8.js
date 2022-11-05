const repeatNumbers = function(data) {
  let arrOfStr = [];
  let finalStr = "";
for(let y = 0; y < data.length; y++) {
  let repeat = 1;
  while(repeat <= data[y][1]) {
    finalStr += data[y][0];
    repeat++;
  }
  //console.log(finalStr);
  arrOfStr.push(finalStr);
  finalStr = "";
  }

const text = arrOfStr.join(", ");
return text;

};


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));