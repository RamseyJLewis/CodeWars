// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 



function duplicateEncode(word) {
    // loop through the word
    let accum = ''
    let wordPlusI = ''
    let wordMinI = word
    word = word.toLowerCase()
    for (let i = 0; i < word.length; i++) {
        // set word[i] to an accum and remove it from the word
        if (word.length != accum.length) {           
            wordMinI = wordMinI.slice(1) 
            console.log(wordMinI);              
   
            console.log(wordPlusI);    
            if (wordMinI.includes(word[i]) || wordPlusI.includes(word[i])) {
                accum = accum.concat(')')
            } else {
                accum = accum.concat('(')
            }          
            wordPlusI = wordPlusI.concat(word[i])  
            console.log(word[i]);
            
            //console.log(wordMinI);
            console.log(accum);
        } else
       
       console.log('done');
    }
    //return accum
}



//console.log(duplicateEncode("din"))  //,"(((");
//console.log(duplicateEncode("recede"))  //,"()()()");
console.log(duplicateEncode("Success"))  //,")())())","should ignore case");
//console.log(duplicateEncode("(( @"))  //,"))((");

//)()(()(


