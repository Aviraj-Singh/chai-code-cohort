/* 
You’ve been tasked with designing the perfect shiny diamond rug for Cursh’s room. They love stars, and you’ve decided to make a 
sparkling pattern using them. You need to help them create this rug, where the stars are arranged in the shape of a diamond! 💥✨
Create a function shinyDiamondRug(n) that prints a shiny diamond shape made of stars. The number n represents the size of the diamond, 
with the middle of the diamond having 2n - 1 stars.

Important Rules:
1️⃣ Each line must not have trailing spaces.
2️⃣ The output must not have an extra newline at the end.

Example:
For n = 4, the output will look like:

   *
  ***
 *****
*******
 *****
  ***
   *

*/

function shinyDiamondRug(n) {
  
    let diamond = "";
  
    for (let i = 1; i <= n; i++) {
      let spaces = " ".repeat(n - i);
      let stars = "*".repeat(2 * i - 1);
      diamond += spaces + stars;
      if (i < n) {
        diamond += "\n";
      }
    }
  
    for (let i = n - 1; i >= 1; i--) {
      let spaces = " ".repeat(n - i);
      let stars = "*".repeat(2 * i - 1);
      diamond += "\n" + spaces + stars;
    }
  
    return diamond;
  }

console.log(shinyDiamondRug(4))