// Find the odd int


// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    let accum = []
    let numSort = A.sort(function (a, b) { return b - a }) //puts numbers in order
    for (let i = 0; i < numSort.length; i++) { // loops through each nbumber
        if( numSort[i] == numSort[i+2]){ // if a number is repetaed 3 times 
           accum.push(numSort[i], numSort[i+2])  
          console.log(accum.pop());
    
        }

    }
    // return 0;
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5, 12])); //5
console.log([1,1,1,1,1,1,10,1,1,1,1]); //10



// [
//     20, 20,  5, 5, 5, 4,  4,
//      3,  3,  2, 2, 1, 1, -1,
//     -1, -2, -2
//   ]