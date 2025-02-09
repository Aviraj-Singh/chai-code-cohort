/* 
You just need to implement the checkVotingEligibility function to determine
if a person is eligible to vote (age 18 or above)
*/
function checkVotingEligibility(age) {
    // Return "Eligible" if age is 18 or more, otherwise return "Not Eligible"
    if (age>=18){
        return "Eligible"
    } else {
        return "Not Eligible"
    }
}

console.log(checkVotingEligibility(18))