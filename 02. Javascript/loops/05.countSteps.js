/* 
You're tracking the number of steps you take during a workout. Each time you take a step, you want to count it. 
You keep stepping until you've reached a certain number of steps.
Create a function that uses a loop to count the number of steps during a workout. 
The loop should continue until you reach the target step count.
*/

function countSteps(targetSteps) {
    let count = 0;
    while(count<targetSteps){
      count+=1;
    }
    return count;
  }

console.log(countSteps(25));