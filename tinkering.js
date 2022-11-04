const judgeVegetable = function(vegetables, metric) {
  let indexOfWinner = 0;
  for(let i = 1; i < vegetables.length; i++) {

    if (metric === "plumpness") {
      if (vegetables[i].plumpness > vegetables[indexOfWinner].plumpness)
        indexOfWinner = i;
    } else if (metric === "redness") {
      if (vegetables[i].redness > vegetables[indexOfWinner].redness)
        indexOfWinner = i;
    }
  }
    return vegetables[indexOfWinner].submitter;
  
};

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

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));