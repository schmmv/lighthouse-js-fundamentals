//This function takes in a date string with the format YYYY/MM/DD, 
//and returns a new human readable date (string) that looks like December 2nd, 2017
const talkingCalendar = function(date) {
  const dateArray = date.split("/");
  
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  let month = parseInt(dateArray[1]);
  month = months[month - 1];
  
  let day = parseInt(dateArray[2]);

  if (day % 10 === 1 && day !== 11) {
    day += "st";
  } else if (day % 10 === 2 && day !== 12) {
    day += "nd";
  } else if (day % 10 === 3 && day !== 13) {
    day += "rd";
  } else {
    day += "th";
  }

  return month + " " + day + ", " + dateArray[0];
};

console.log(talkingCalendar("2017/12/13"));
console.log(talkingCalendar("2007/04/12"));
console.log(talkingCalendar("1987/08/23"));