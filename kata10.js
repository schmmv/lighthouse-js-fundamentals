const multiplicationTable = function(maxValue) {
  let table = "";
  for (let y = 1; y <= maxValue; y++) {
    for (let x = 1; x <= maxValue; x++) {
      table = table + " " + (x * y);
    }
    table += "\n";
  }
return table;
};

console.log(multiplicationTable(5));