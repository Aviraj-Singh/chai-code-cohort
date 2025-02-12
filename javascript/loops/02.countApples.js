/*
You have a basket full of apples. You need to count how many apples are in the basket, but you don’t know the exact number. 
Each time you pick an apple, you count one. Your task is to count how many apples are in the basket.
Create a function that counts the number of apples in the basket using a loop.
*/

function countApples(apples) {
    let appleCount = 0;
    while (appleCount < apples) {
      appleCount++;
    }
    return appleCount;
}

// We can use other loops like for and all

console.log(countApples(3))