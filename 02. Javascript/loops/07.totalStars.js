/*
You have multiple levels of stars to count. Each level contains a certain number of stars. How many total stars are there?
Create a function that takes an array of arrays (representing the number of stars in each level) and returns the total number of stars.
*/

function totalStars(starLevels) {
    let totalStars = 0;
    for (let i=0; i<starLevels.length; i++){
        totalStars += starLevels[i].length;
    }
    return totalStars;
}

console.log(totalStars([['*','*','*'], ['*','*'], ['*']]))