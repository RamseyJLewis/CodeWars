// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or space


function getCount(str) {
    let vowelsCount = 0
 
    for ( i = 0; i < str.length; i++){
       
        let currentLetter = str[i]

        if ((currentLetter.match(/[aeiou]/gi))) {

            vowelsCount++;
        }
    }
    return vowelsCount
}
  
  console.log(getCount("abracadabra"));







  