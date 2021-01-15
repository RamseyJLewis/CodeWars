// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
    let str = n.toString();
    let arr = [];
    for(let i = 0; i < str.length ; i++){  
      arr.push(str[i]);     
    }
    let sortArr = arr.sort((a,b)=> b - a)
    let back2Str = sortArr.toString()
    let newStr = back2Str.replace(/,/g, '')
    let finalInteger = parseInt(newStr,10)
    return finalInteger
  }


  console.log(descendingOrder(67340923));