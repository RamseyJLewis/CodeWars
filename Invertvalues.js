// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []


array1 = [1,2,3,4];

function invert(array) {
     return array.map(x => x * -1)
  }
console.log(invert(array1))



function fakeBin(x){
    var val = '';

    for(i = 0; i < x.length; i++){
        if(Number(x[i],5)){
            val += '0';
        } else {
            val += '1';
        }
    }
    return val;
}