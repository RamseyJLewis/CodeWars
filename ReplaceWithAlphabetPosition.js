// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.



function alphabetPosition(text) {
    // each letter to a number
    let letters =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let accum = ''
    for(i = 0; i < text.length; i ++){        
       if(letters.includes(text[i].toLowerCase())){      
        let x = letters.indexOf(text[i].toLowerCase()) +1
        accum = accum + ' ' + x 
       }
    }
    return accum.trim();
  }

  console.log(alphabetPosition("The sunset sets at twelve o' clock."))