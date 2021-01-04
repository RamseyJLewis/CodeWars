// Create a function that takes a number and returns an array of strings containing the number cut off at each digit.

// Examples
// 420 should return ["4", "42", "420"]
// 2017 should return ["2", "20", "201", "2017"]
// 2010 should return ["2", "20", "201", "2010"]
// 4020 should return ["4", "40", "402", "4020"]
// 80200 should return ["8", "80", "802", "8020", "80200"]
// PS: The input is guaranteed to be an integer in the range [0, 1000000]

function createArrayOfTiers(num) {
    let numStr = num.toString(); //'420'
    let arr = []
    let finalArr = []
    for(let i = 0; i < numStr.length; i ++){
       arr.push(numStr[i]) 
       arr.join('')
        finalArr = arr 
       console.log(finalArr.concat(arr))        
    }
    return numStr;
}

function createArrayOfTiers(num) {
    let prev = '';
    return [...num + ''].map((value) => {
        return prev += value;
    });
}

console.log(createArrayOfTiers(420)); // 420 should return ["4", "42", "420"]
// console.log(createArrayOfTiers(2017));