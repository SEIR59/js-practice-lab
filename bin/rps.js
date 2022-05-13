// Test your work by running the command:
// node bin/rps.js
// Write a script that looks at a variable representing either rock, paper, or scissors, and picks a random one to pit it against.
// Log "Computer picked: <rock/paper/scissors>. You <win/lose>".
// **Hint:** Try using Numbers to relate to user choices like using 0 to refer to rock, 1 for paper, and 2 for scissors. Javascript includes a `random` method within the `Math` built-in object to help you generate these numbers.

const moves = ["rock", "paper", "scissors"];

let comp = moves[Math.floor(Math.random() * moves.length)];
let user = moves[Math.floor(Math.random() * moves.length)];

const rockPaperScissors = (comp, user) => {
    console.log(`Computer move: ${comp}. \nYour move: ${user}. `)
    if (comp === user) {
        console.log("It's a Tie!");
    } else if (comp === moves[0]) {
        if (user === moves[1]) {
            console.log("You win!");
        } else {
            console.log("Computer wins!");
        }
    } else if (comp === moves[1]) {
        if (user === moves[2]) {
            console.log("You Win!");
        } else {
            console.log("Computer Wins!");
        }
    } else if (comp === moves[2]) {
        if (user === moves[0]) {
            console.log("You Win!");
        } else {
            console.log("Computer Wins!");
        }
    }
}
rockPaperScissors(comp, user);