// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"



function spinWords(spin){
    let arr = spin.split(' ')
    let finalArr = []
    for(let i = 0; i < arr.length; i++){
        let currentword = arr[i]
        console.log(currentword)
        if(currentword.length >= 5){
            
            let rev5Arr = currentword.split('')
            let rev5 =  rev5Arr.reverse()
            let rev5Str = rev5.join('')
            finalArr.push(rev5Str)
        }else{

            finalArr.push(currentword)
        
        }
    }
    return(finalArr.join(' '))
}

console.log(spinWords("Just kidding there is still one more"))