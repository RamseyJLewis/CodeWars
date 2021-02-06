// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

//


function duplicateEncode(word) {
    let accum = ''
    let wordPlusI = ''
    let lowWord = word.toLowerCase()
    let wordMinI = lowWord
    for (let i = 0; i < lowWord.length; i++) {
        if (lowWord.length != accum.length) {           
            wordMinI = wordMinI.slice(1) 
            if (wordMinI.includes(lowWord[i]) || wordPlusI.includes(lowWord[i])) {
                accum = accum.concat(')')
            } else {
                accum = accum.concat('(')
            }          
            wordPlusI = wordPlusI.concat(lowWord[i])  
        } 
    }
   return accum
}



//console.log(duplicateEncode("din"))  //,"(((");
//console.log(duplicateEncode("recede"))  //,"()()()");
//console.log(duplicateEncode("SSuccess"))  //,")())())","should ignore case");
console.log(duplicateEncode("Q(FQ QlmQQQaOv@Qb")) //')(()()(()))(((()('


//)()(()(


