// ARRAY METHODS EXERCISES

const clients = [
    "john smith",       // [0]
	"jane smith",       // [1]
	"john doe",         // [2]
	"jane doe",         // [3]
	"john carpenter",   // [4]
	"jane fonda"        // [5]
]

// 1. Write a function `printAllNames` which uses a .forEach to console.log each of the client names 

// 2. Write a function `filterJohns()` which uses .filter to return an array of all `clients` with the name "john"

// 3. Write a function `findJane()` which uses .find to return the first person with a name of "Jane" in `clients`

// 4. Write a function `secondHalf()` which uses .slice to return a new array of only the second half of `clients`

// 5. Write a function `capitalizedNames()` which returns a new array using .map based on the `clients` array with every first name properly capitalized

// BONUS - Both the first and last names are properly capitalized when `capitalizedNames()` is called

// 6. Write a function `sortNames()` which alphabetically sorts the names in `clients`

// BONUS - `sortNames()` does not alter the original array but instead creates a copy of the array and returns a sorted copy
// HINT - You'll have to look up how to create a copy of an array