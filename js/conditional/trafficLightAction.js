/*
Determine Action based on Traffic Light Color (use switch-case)
Red -> "Stop"
Yellow -> "Slow Down"
Green -> "Go"
Any Other Color -> "Invalid Color"
*/

function trafficLightAction(color) {
    // Return "Stop", "Slow Down", or "Go" based on the traffic light color
    switch (color){
        case "Red":
            return "Stop"
            break
        case "Yellow":
            return "Slow Down"
            break
        case "Green":
            return "Go"
            break
        default:
            return "Invalid Color"
    }
  }

console.log(trafficLightAction("Purple"))