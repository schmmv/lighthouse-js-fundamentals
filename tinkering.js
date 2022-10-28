const judgeVegetable = function(vegetables, metric) {
  let indexOfWinner = 0;
  switch(metric) {
  case "redness":
    for(let i = 1; i < vegetables.length; i++) {
      if(vegetables[i].redness > vegetables[indexOfWinner].redness)
        indexOfWinner = i;
    }
    break;
  case "plumpness":
    for(let i = 1; i < vegetables.length; i++) {
      if(vegetables[i].plumpness > vegetables[indexOfWinner].plumpness)
        indexOfWinner = i;
    }
    break;
  default:
    return "Invalid metric";
  }
  return vegetables[indexOfWinner].submitter;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));