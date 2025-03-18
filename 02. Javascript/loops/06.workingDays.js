/*
You're planning a week's schedule and need to count the days you are working. 
You have an array where each element represents a day of the week. How can you calculate how many days you are working?
Create a function that takes an array of days (e.g., ["Monday", "Tuesday", "Friday"]) and returns the number of days you're working. 
"Saturday" and "Sunday" are not working days.
*/

function workingDays(days) {
    let numberOfDays = 0;
    for (let i=0; i<days.length; i++){
        if (days[i].toLowerCase()!=='saturday' && days[i].toLowerCase()!=='sunday'){
            numberOfDays += 1;
        }
    }
    return numberOfDays;
  }

console.log(workingDays(['Monday', 'Tuesday', 'Wednesday', 'saturday', 'SUNDAy']))