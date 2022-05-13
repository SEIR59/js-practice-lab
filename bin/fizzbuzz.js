// Fizzbuzz

// Test your work by running the command: 
// node bin/fizzbuzz.js
//
// Write a short program that prints each number from 1 to 100 on a new line.
// For each multiple of 3, print “Fizz” instead of the number.
// For each multiple of 5, print “Buzz” instead of the number.
// For numbers which are multiples of both 3 and 5, print “FizzBuzz” instead of the number.

// console.log("Is this able to run from the command line if I use node?")

// function fizzBuzz () {

// }

const fizzBuzz = (num) => {
    for (let i = 1; i <= num; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 5 === 0){
            console.log("Buzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
};

fizzBuzz(45);