// Your task is to remove all consecutive duplicate words from string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"



//const removeConsecutiveDuplicates = s => 


function removeConsecutiveDuplicates(s){
    // an empty string
        let final = ''
    //making string into array
        let arr = s.split(' ')
    //looping through array one word at a time staring at 0 index
    for (let i = 0; i < arr.length; i ++){

        if (arr[i] !== arr[i+1]){
            //console.log(arr[j])
            final += arr[i] + ' ' ;
        }
    }
    return final.substring(0, final.length-1)
}



console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"))