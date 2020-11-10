function fizzBuzz (n){
    let count = 0;
    let arr = [];
    //untill count = the number add one to count 
    while( count < n){
            count ++
            arr.push(count)
            console.log(arr)
        if( count % 5 == 0 && count % 3 == 0 ){
            arr.pop()
            arr.push('Fizzbuzz')
        } else if(count % 5 == 0){
            arr.pop()
            arr.push('buzz')
        }  else if( count% 3 == 0 ){
            arr.pop()
            arr.push('fizz')
        }  
}
}
console.log(fizzBuzz([30]))