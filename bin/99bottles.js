// Test your work by running the command: 
// node bin/99bottles.js
// Running the program should print the lyrics of the song, be efficient and use loops/if statements

// let num = 9;


const bottlesSong = (num) => {
    while(num > 0){
        if (num > 2){
            console.log(`${num} bottles of beer on the wall, ${num} bottles of beeer, take one down, pass it around, ${num - 1} bottles of beer on the wall.`)
            num-- 
        } else if (num === 2){
            console.log(`${num} bottles of beer on the wall, ${num} bottles of beeer, take one down, pass it around, ${num - 1} bottle of beer on the wall.`)  
            num--      
        } else {
            console.log(`${num} bottle of beer on the wall, ${num} bottle of beeer, take one down, pass it around, no more bottles of beer on the wall.`)
            num--         
        }
        // num = num - 1
    }
}

bottlesSong(7)