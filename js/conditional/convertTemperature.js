/*
Given temperature in any scale, convert it to other scale
*/

function convertTemperature(value, scale) {
    // Convert temperature based on the scale ("C" to "F" or "F" to "C")
    let temp = 0;
    scale = scale.toLowerCase();
    switch (scale){
        case "c":
            temp = ((value*9)/5) + 32
            return `${temp}°F`
            break
        case "f":
            temp = ((value-32)*5)/9
            return `${temp}°C`
            break
        default:
            return "Invalid Scale"
    }
}

console.log(convertTemperature(32, "F"))