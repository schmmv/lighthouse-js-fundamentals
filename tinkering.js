const carPassing = function(cars, speed) {
  const car = {
    time: Date.now(),
    speed: speed
  };
  cars.push(car);
  return cars;
}