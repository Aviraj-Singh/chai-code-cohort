/*
Given marks determine grade: 
90+ -> A
80-89 -> B
70-79 -> C
60-69 -> D
Below 60 -> F
You just need to implement the calculateGrade function
*/
function calculateGrade(marks) {
    // Return grade based on the marks
    if (marks>=90){
        return "A"
    } else if(marks>=80){
        return "B"
    } else if(marks>=70){
        return "C"
    } else if(marks>=60){
        return "D"
    } else {
        return "F"
    } 
}

console.log(calculateGrade(89))