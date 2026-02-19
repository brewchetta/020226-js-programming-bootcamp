// OBJECTS

// objects are data structures --> a data structure is a construct that holds data in a more complex way than a variable

const gameOfThrones = {
    title: "Game Of Thrones",
    numberOfSeasons: 8,
    numberOfEpisodes: 73,
    review: {
        title: "Best Show of All Time OMG",
        reviewer: "Bob from Bob's Burgers",
        content: "I love this show OMG it's soooooooooo good"
    }
}

// each attribute is a KEY / VALUE pair

// "title" is a key
// "Game of Thrones" is a value

// "numberOfSeasons" is a key
// 8 is a value

// setting object keys and values

gameOfThrones.title = "A Game of Thrones"
gameOfThrones.criticScore = 0.83



// exercises1.js

const xMen = {
    title: "X-Men: the Animated Series",
    numberOfSeasons: 5,
    numberOfEpisodes: 76,
    review: {
        title: "I like xmen",
        reviewer: "Chett (1990's version)",
        content: "Wolverine is super cool"
    }
}


// Adding Methods

const robot = {
    name: "WALL-E",
    age: "unknown",
    batteryLife: "1 hour",
    pushBlock: function() { return robot.name + " pushes the block" },
    charge: function() { robot.batteryLife = "24 hours" },
    killAllHumans: function() { return "BEEP BOOP MURDER HUMANS" }
}


// exercises-2.js

const car = {
    make: "Ford",
    model: "Taurus",
    gallonsInTank: 2,
    maxGallons: 10,
    currentMiles: 100000,
    whatIsThis: function() { 
        return this 
    },
    describeMakeModel: function() { 
        return `${this.make} ${this.model}` 
    },
    fillTank: function() { 
        this.gallonsInTank = this.maxGallons 
    },
    goForADrive: function() {
        this.gallonsInTank -= 5
        this.currentMiles += 100
    },
    rewindMiles: function() {
        this.currentMiles = 0
    }
}