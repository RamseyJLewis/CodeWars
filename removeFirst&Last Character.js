//It's pretty straightforward. Your goal is to create a function that removes the
//first and last characters of a string. You're given one parameter, the original
//string. You don't have to worry with strings with less than two characters.

let plant = 'trees' 
let car = 'mercadesBenz'

function removeChar(str){
    let removeLast = str.slice(0, -1)
    let finalOuput = removeLast.slice(1)

    return finalOuput
};

   console.log(removeChar(car))