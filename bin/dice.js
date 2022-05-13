// Test your work by running the command: 
// node bin/dice.js
//
// Write a script that chooses two random numbers (1-6) and prints them to the console. 
// It should also print the sum


// BONUS: have your script take an argument of the # of dice to be rolled. 
// i.e. if I run `node bin/dice-roller.js 5` it should roll 5 dice, print each dice result, and the sum.

const getNums = (max) => {
    let num1 = Math.floor(Math.random() * max);
    let num2 = Math.floor(Math.random() * max);
    console.log(`The first die roll is ${num1}. The second die roll is ${num2}. The total is ${num1 + num2}`)
    return
}

getNums(6)