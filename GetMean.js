function getAverage(marks){
    var sum = 0;
    for(var i = 0; i < marks.length;i++){
        console.log(marks[i])
       
       let average = sum += marks[i];
       return  average
    }
}

console.log(getAverage([1,2,3,4,5]))






// function average(array) {
//     var sum = 0;
//     for(var i = 0; i < array.length;i++){
//         sum += array[i];
//     }
//     return sum / array.length;
// }

// console.log(average([1,4,1]))




function revWord (str){
let arr = str.split(' ')
   return arr.reverse()
}

console.log(revWord('a pigs feet'))