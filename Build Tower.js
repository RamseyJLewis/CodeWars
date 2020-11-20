// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// C#: returns a string[];
// PHP: returns an array;
// C++: returns a vector<string>;
// Haskell: returns a [String];
// Ruby: returns an Array;
// Lua: returns a Table;
// Have fun!

    //LOOP THROUGH TOWERBUILDER nFloors times
    //

function towerBuilder(nFloors) {
    let numStars = nFloors * 2 - 1
    let base = '' 
    let towerAdd = []
    let spaces = '' 
        
    for(let i = 0; i < numStars; i++){
        base += '*' 
    }
    
    for(let i = 0; i < nFloors; i++){
        towerAdd.unshift(spaces + base + spaces)
        base = base.slice(2)
        spaces += ' '
    }
    return towerAdd
  }

// console.log(towerBuilder(1))//, ["*"]);
// console.log(towerBuilder(2))//, [" * ","***"]);
console.log(towerBuilder(5))//, ["  *  "," *** ","*****"]);//


// [
//     '     *     ', 0 = 1 (Base - 2 = Floor)
//     '    ***    ', 1 = 3 (Base - 2 = Floor)
//     '   *****   ', 2 = 5 (Base - 2 = Floor)
//     '  *******  ', 3 = 7 (Base - 2 = Floor)
//     ' ********* ', 4 = 9 (Base - 2 = Floor) + spaces + spaces
//     '***********'  5 = 11 ( nFloors * 2 + 1 = Base)
//   ]