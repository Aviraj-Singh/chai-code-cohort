/*
A leap year id divided by 4 and not by 100 unless also divided by 400.
Wrire a function isLeapYear to check if the given year is Leap Year or not
*/

function isLeapYear(year) {
    // Return "Leap Year" if the year is a leap year, otherwise return "Not a Leap Year"
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return "Leap Year";
    } else {
        return "Not a Leap Year";
    }
  }
  
console.log(isLeapYear(1900))