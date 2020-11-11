// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["a","b","c","d","f"] -> "P"

function findMissingLetter(array){
    let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] 
    let arrayLC = array.map(letter => letter.toLowerCase());
    let start = alpha.indexOf(arrayLC[0])

    for(let i = start; i < start + arrayLC.length + 1; i++){
        let curentLet = alpha[i]
    
        if(!arrayLC.includes(curentLet)){
            return array[0] === array[0].toLowerCase()?curentLet:curentLet.toUpperCase()
        }
    }
}


// console.log(findMissingLetter(["a","b","c","d","f"]))
console.log(findMissingLetter(['O','Q','R','S']))