// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// 

function arrayDiff(a, b) {
    let result = []

        result = a.filter(ele => !b.includes(ele))   
        

     return result
}
console.log(arrayDiff([1,2,2,2,3,4,5],[2,4,7]))



console.log('1,2,3,4'.includes('2'))