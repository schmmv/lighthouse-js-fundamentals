//Function that takes in a bill amount, and the cash amount in cents given to pay.
//Returns an object describing the total amount of change for the cashier to give back
//Omits types of change that isn't needed from the results
/* valid denominations:
Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢)
*/

const calculateChange = function(total, cash) {
  let diff = cash - total;
  let change = {};
  const centsLibrary = [
    {name: "twentyDollar", value: 2000},
    {name: "tenDollar", value: 1000},
    {name: "fiveDollar", value: 500},
    {name: "twoDollar", value: 200},
    {name: "oneDollar", value: 100},
    {name: "quarter", value: 25},
    {name: "dime", value: 10},
    {name: "nickel", value: 5},
    {name: "penny", value: 1}
  ];
  let num;
  for( let i = 0; i < centsLibrary.length; i++) {
    num = Math.floor(diff / centsLibrary[i].value);
    diff -= centsLibrary[i].value * num;
    change[centsLibrary[i].name] = num;
    }
  for (let key in change) {
    if (change[key] === 0) {
      delete change[key];
    }
  }
  
  return change;
};

console.log(calculateChange(1787, 2000)); //{ twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000)); //{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000)); //{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }



