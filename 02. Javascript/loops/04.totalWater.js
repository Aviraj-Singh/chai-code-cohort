/*
You're preparing for a picnic and need to fill several water bottles. 
Each bottle requires a different amount of water, but you're going to fill them one by one. 
How do you track the amount of water you're adding to each bottle?
Create a function that takes an array of water amounts (in liters) for each bottle and adds them up. 
The function should return the total amount of water you've filled in all the bottles.
*/

function totalWater(waterAmounts) {

    let totalAmout = 0;

    for (let i=0; i<waterAmounts.length; i++){
        totalAmout = totalAmout + waterAmounts[i];
    }

    return totalAmout;
}

console.log(totalWater([1,2,3,4]))