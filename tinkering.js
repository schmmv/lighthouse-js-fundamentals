function range(start, end, step) {
  let newArray = [];
  if (start !== undefined && end !== undefined && step !== undefined && step >=0 && start <= end) {
  newArray.push(start);
  while(start <= end - step) {
    start += step;
    newArray.push(start);
  }
}
  return newArray;
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));