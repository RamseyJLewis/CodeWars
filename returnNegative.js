// In this simple assignment you are given a number and have to make it negative. 
// But maybe the number is already negative?

let nine = 9
let negNine = -9

function makeNegative(num) {
    if (num < 0){ 
        return num
    } else {
        return (num * -1)
    }
} 

  console.log(makeNegative(9))