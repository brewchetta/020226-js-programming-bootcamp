// EXERCISES - CONDITIONAL STATEMENTS

// 1. Create variables `numberOne`, `numberTwo`, `numberThree`, these variables can be any numbers you choose, feel free to change them as you test out things in the exercises.

const numberOne = 100
const numberTwo = 20
const numberThree = 0

// 2. If numberOne is greater than numberTwo, console.log "{numberOne} is greater than {numberTwo}" (use interpolation to add the actual numbers in)

if (numberOne > numberTwo) {
    console.log( `${numberOne} is greater than ${numberTwo}` )
}

// 3. If numberThree is NOT zero, console.log "{numberTwo} divided by {numberThree} is {X}", otherwise console.log "cannot divide {numberTwo} by {numberThree} because {numberThree} is zero!"

if (numberThree !== 0) {
    console.log( `${numberTwo} divided by ${numberThree} is ${numberTwo / numberThree}` )
} else {
    console.log(`cannot divide ${numberTwo} by ${numberThree} because ${numberThree} is zero!`)
}

// 4. If numberOne is positive console.log "{numberOne} is positive" otherwise if it's negative console.log "{numberOne} is negative"

if (numberOne > 0) {
    console.log(`${numberOne} is positive`)
} else if (numberOne < 0) {
    console.log(`${numberOne} is negative`)
}