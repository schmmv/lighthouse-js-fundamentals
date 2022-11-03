//function that returns the coordinates [X, Y] of an available parking spot based on vehicle type
const whereCanIPark = function (spots, vehicle) {
//Regular car can park in R spots
//Small car can park in S and R spots
//Motorcycle can park in M, S, and R spots
//Upper Case means it's available, lower case means it's not

  for (let y = 0; y < spots.length; y++) {
    //console.log(spots[y]);
    for (let x = 0; x < spots[y].length; x++) {
      const spot = spots[y][x];
      if(vehicle === "regular") {
        if (spot === "R") 
          return [x, y];
      } else if (vehicle === "car") {
          if (spot === "S" || spot === "R")
            return [x, y];
      } else if (vehicle === "motorcycle") {
          if (spot === "M" || spot === "S" || spot === "R")
            return [x, y];
      }
    }
  }
  return false;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))