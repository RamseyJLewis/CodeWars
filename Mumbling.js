// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"


function accum(letters) {
    let empty = ''
 
    for(let i = 0; i < letters.length; i++){
     
        let arr = letters[i].split('')
        let upper= arr.join().toUpperCase()
      
    
        let repLet = letters[i].repeat([i]) 
        let everyLetter = upper + repLet 
        final = everyLetter + '-'
    
        
    }
  
}

console.log(accum('abcd'))