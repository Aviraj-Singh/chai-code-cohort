/*
Create a calculator that performs basic operations like +,-,/,*
*/

function calculator(num1, num2, operator) {
    // Perform basic arithmetic operations using switch case
    switch(operator){
        case "/":
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break
        case "*":
            return num1 * num2
            break
        case "+":
            return num1 + num2
            break
        case "-":
            return num1 - num2
            break
        default:
            return "Invalid Operator"
    }
}

console.log(calculator(1,2,"+"))
  