const isMyFloatBigger = myFloat > myInteger
// false --> boolean

// if (isMyFloatBigger) {
//     console.log("myFloat is the bigger value")
// } else {
//     console.log("myFloat is NOT the bigger value")
// }

// truthiness --> everything is either truthy or falsey

const thumbsUp = "👍"

// if ( "👍" ) {
//     console.log("I AM TRUTHY")
// } else {
//     console.log("I AM FALSEY")
// }

// 0 FALSEY

// "" FALSEY

// undefined FALSEY

// null FALSEY

// NaN FALSEY

myInteger = 1000001

// if (myFloat > myInteger) {
//     console.log(`${myFloat} is bigger than ${myInteger}`)
// } else if (myFloat === myInteger) {
//     console.log(`${myFloat} is equal to ${myInteger}`)
// } else if (myFloat < myInteger) {
//     console.log(`${myFloat} is less than ${myInteger}`)
// } else {
//     console.log("It's not biggers, smaller, equal... these are some weird numbers!")
// }

myFloat > myInteger // greater than
myFloat >= myInteger // greater than or equal
myFloat < myInteger // less than
myFloat <= myInteger // less than or equal

myFloat === myInteger // strict equality --> cares a lot about matching data types
myFloat == myInteger // loose equality --> will compare equality disregarding data types

myFloat !== myInteger // not equal --> will compare and be true if something is NOT strictly equal
myFloat != myInteger // not equal --> will compare and be true if something is NOT loosely equal
