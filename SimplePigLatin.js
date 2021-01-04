// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !



function pigIt(str) {
    let accum = ''
    let finalOut = ''
    let split = str.split(' ')//[ 'Hellow', 'world', '!' ]
    for (let i = 0; i < split.length; i++) {
        split[i]; //Hellow, world, !
        let noFront = split[i].substring(1) //ello orld

        let front = split[i][0]; // H w !
   
        let word = noFront.concat(front) // ellowH orldw !
        let punc = /[!\?.]/
        let phrase = ''
        if (!word[0].match(punc)) {
            phrase = word.concat('ay')
        }
        //  console.log(phrase); //ellowHay orldway
        accum = accum + ' ' + phrase
        // console.log(accum); // ellowHay orldway 
        
        if (word[0].match(punc) ) {
            finalOut = accum.concat(word[0])
        } else{
            finalOut = accum
        }
    }
    return finalOut.trim()
}
console.log(pigIt('Hellow world !'));
//   console.log(pigIt('Pig latin is cool'));
