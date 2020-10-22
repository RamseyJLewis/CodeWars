// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

const rps = (p1, p2) => { 
    if('scissors','paper'){
        return 'Player 1 won!'
    } else if ('paper','rock' ) {
        return 'Player 1 won!'
    } else if ('rock','scissors' ) {
        return 'Player 1 won!'
    } else if('paper','scissors'){
        return 'Player 2 won!'
    } else if ('rock','paper' ) {
        return 'Player 2 won!'
    } else if ('scissors','rock' ) {
        return 'Player 2 won!'
    } else{
        return 'Draw!'
    }
};

console.log(rps('paper','paper'))