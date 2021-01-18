function findShort(s){
let arr = s.split(' ');
let accum = [];
for(let i=0; i<arr.length; i++){
    accum.push(arr[i].length);
    accum.sort(function(a, b){return a-b});
}
 return accum[0];
}

// console.log(findShort("turns out random test cases are easier than writing out basic ones"))   //, 3); 
console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
                         