// STRING EXERCISES

// 1. Create a new variable called `currentTime` and assign a string of the current time to that variable --> 10:52am EST
    // - this variable to be changeable

let currentTime = "11:21am Eastern"

// 2. Create a new variable using concatetanation (the `+`) with your currentTime variable and create a string that reads "The current time is now 10:52am EST"

const concatTime = "The current time is now " + currentTime

// 3. Create a new variable using interpolation (`${}`) with your currentTime variable and create a string that reads "The current time is now 10:52am EST"

const interpTime = `The current time is now ${ currentTime }`

// 4. Create a new variable called currentTimeUpcased which uppercases one of the previous either concatenation or interpolation variables

const currentTimeUpcased = interpTime.toUpperCase()