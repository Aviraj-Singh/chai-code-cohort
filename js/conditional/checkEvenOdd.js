/*
Tell if the given number is Even or Odd
*/

function checkEvenOdd(num) {
  // Return "Even" if num is even, otherwise return "Odd"
  if (num%2===0){
    return "Even"
  } else{
    return "Odd"
  }
}

console.log(checkEvenOdd(4))