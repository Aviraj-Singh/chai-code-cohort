/*
You're shopping for groceries and want to know the total cost of all the items in your cart. You have an array of item prices.
Create a function that takes an array of item prices and returns the total cost.
*/

function totalPrice(prices) {
  let totalCost = 0;
  for(let price of prices){
    totalCost += price;
  }
  return totalCost;
}

console.log(totalPrice([1.5,2.3,3.7]))