// HIGHER ORDER FUNCTIONS

function makeFunction() {
    
    function newFunction() {
        console.log("I'M ALIIIIIIIIIIVE")
    }

    return newFunction
}


function additionFactory( firstNumber ) {

    function addition(secondNumber) {
        return firstNumber + secondNumber
    }

    return addition
}

// EXERCISE

// Create a new function called divisionFactory that returns a new function. The divisionFactory accepts a parameter `divisor`. 

// The newly created function accepts a parameter `numberToBeDivided` and when called it will return the `numberToBeDivided` divided by the `divisor`.

function divisionFactory(divisor) {

    function divideBy(numberToBeDivided) {
        return numberToBeDivided / divisor
    }

    return divideBy

}