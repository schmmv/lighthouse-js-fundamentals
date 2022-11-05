function merge(array1, array2) {
  let newArray = [];
  for (let num of array1) {
    newArray.push(num);
  }
  for(let num2 of array2) {
    newArray.push(num2);
  }

  newArray.sort(function(a, b,){return a-b});
  return newArray;

}
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);