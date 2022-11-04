const judgeVegetable = function(vegetables, metric) {
  let rating = 0;
  let winner = "";
  const str = metric;
  for(let veg of vegetables) {
      if (veg[metric] > rating) {
        rating = veg[metric];
        winner = veg.submitter;
      }
    }
  return winner;
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

const metric = 'plumpness'

console.log(judgeVegetable(vegetables, metric));