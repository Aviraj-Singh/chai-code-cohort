/*
You lost your phone in a list of items. Find the index of "Phone".
Create a function that finds the index of "Phone" in the list of items and returns the index.
*/

function findPhone(items) {
    // Return the index of "Phone" in the items array
    let itemIndex = items.indexOf("Phone");
    return itemIndex;
}

console.log(findPhone(['Shoe', 'Belt', 'Wallet', 'Phone']))