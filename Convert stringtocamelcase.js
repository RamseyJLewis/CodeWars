// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// //toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"


function toCamelCase(str){
    let arr = str.split('_').join('-').split('-');
    let empty = arr[0];

    for(let i = 1; i < arr.length; i++){
        let firstLet = arr[i][0].toUpperCase();
        empty  += firstLet + arr[i].slice(1);
    }

    return empty;
}

console.log(toCamelCase("the-Stealth_warrior"))