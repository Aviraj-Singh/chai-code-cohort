/*
Given 3 numbers, determine the largest number
*/

function findLargest(a, b, c) {
    // Return the largest among a, b, and c
    if (a>=b && a>=c){
      return a
    } else if(b>=a && b>=c){
      return b
    } else {
      return c
    }
}

console.log(findLargest(2,77,29))