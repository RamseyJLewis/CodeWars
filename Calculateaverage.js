// Write function avg which calculates average of numbers in given list.

function find_average(array) {
    
    let arrLength = array.length
    let arrayAV = array.reduce((total, amount) => total + amount);

    finalOuput = arrayAV / arrLength 

    return finalOuput
  }

console.log(find_average([1,2,3]))
