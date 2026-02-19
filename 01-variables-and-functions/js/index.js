console.log("Day One - Variables and Functions")

const constantGreeting = "Hello world";

// const greeting is a variable definition

// const is short for CONSTANT
//  a constant cannot be changed or reassigned

let currentGreeting = "howdy";
// let is a variable which can be reassigned (it can be changed)

currentGreeting = "hello there";

// "Hello world" is a string --> a string of characters

const concatenatedString = "Hello" + " " + "world"

const interpolatedString = `Today's greeting is: ${ currentGreeting }`

currentGreeting = "howdy"

// interpolated string will still be "Today's greeting is: hello there"


// NUMBERS & BOOLEANS

const someSortOfNumber = 1

let myInteger = 2

const myFloat = 2.0
// a float has a decimal point in it


// FUNCTIONS

// function definition with a name
function someName() {
    // what the function actually does
    console.log("I AM FUNCTION AND I AM WORKING")
    console.log("I AM THE SECOND LINE OF THE FUNCTION")
    console.log("I AM SOME THIRD THING THE FUNCTION DOES")
}

// number is a parameter
function isItPositive( number ) {
    if (number > 0) {
        return `${number} is positive`
    } else if (number < 0) {
        return `${number} is negative`
    }

    return `${number} is not positive or negative`
    // this will fire if the other conditions don't trigger! otherwise the return statements mean we don't get to this last line
}

// function calls --> execute the code!
isItPositive(100)
isItPositive(-2000)

// function with multiple arguments
function divide(number1, number2) {
    const result = number1 / number2
    // return will be what the function gives when it completes
    return result
}

const divisionResult = divide(100, 3)

// return ENDS the function and no code after it will run
function multipleReturns() {
    return "Hello"
    return "Goodbye"
    return "I'm staying forever"
    console.log("I am a console log after the returns!")
}

// because we're not returning anything we NEED to use an else or else both console.logs will fire
function needsAnElse(greeting) {
    if (greeting === "hey") {
        console.log("hello")
    } 
    console.log("goodbye")
}

function needsAnElse(greeting) {
    if (greeting === "hey") {
        console.log("hello")
    } else {
        console.log("goodbye")
    }
}

// default parameter value

function add(x, y, z=0) {
    return x + y + z
}

// dates
// const today = new Date()

function talkAboutDate( date=new Date() ) {
    return `The year ${date.getFullYear()} has been very good`
}

const twentyTwentyThree = new Date("1/1/2023")
talkAboutDate( twentyTwentyThree )

// with default argument...
talkAboutDate()


// SCOPE

// console.log(thingInTime)

// const thingInTime = "I am happening here and now"

function whatsAtTheEnd() {
    const resultFromTheEnd = atTheEnd()
    return resultFromTheEnd
}





// if you have { } with code to execute inside it's a BLOCK

// global scope - not inside of anything
// global variables can be accessed anywhere
const outside = "I AM OUTSIDE IN THE COLD WHY IS IT SO COLD"

function thingsAreInside() {
    // console.log(outside)
    const inside = "I'm WARM AND TOASTY INSIDE"
    return inside
}

function moreInsideThings() {
    const firstThing = "I am the first"
    console.log(firstThing)
    const secondThing = "I am the second"
    const thirdThing = "I am the third"
}

// you cannot grab variables from outside the scope including inside the scope of another external function!
function getStuffFromAnotherFunction() {
    console.log(firstThing)
}

function outerFunction() {

    const outsideVariable = "I'm an outside variable"

    function innerFunction() {
        const insideVariable = "I'm an inside variable"
    }

    console.log(insideVariable)

    innerFunction()

}

// console.log(inside)




// FUNCTION HOISTING

const resultFromTheEnd = atTheEnd()
console.log(resultFromTheEnd)

function atTheEnd() {
    return "I'm at the end of the code"
}