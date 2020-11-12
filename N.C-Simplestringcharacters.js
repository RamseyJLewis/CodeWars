// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.


// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.


// function solve(s){
//     up = 0; low = 0; num = 0; spec = 0;
//     Alphabet = 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.';

//     for(i = 0; i < s.length; i ++){
//         // if s[i] == any upercaser letter up + 1

//     }
    
// }


console.log(findMissingLetter("*'&ABCDabcde12345"))


function findMissingLetter(array){
    let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] 
    let arrayLC = array.map(letter => letter.toLowerCase());
    let start = alpha.indexOf(arrayLC[0])

    for(let i = start; i < start + arrayLC.length + 1; i++){
        let curentLet = alpha[i]
    
        if(!arrayLC.includes(curentLet)){
            return array[0] === array[0].toLowerCase()?curentLet:curentLet.toUpperCase()
        }
    }
}


console.log(findMissingLetter("*'&ABCDabcde12345"))


// https://www.codewars.com/users/RamseyJLewis/completed_solutions

// link