// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.


// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.


function solve(s){

    let arr= [0,0,0,0]

    for(i = 0; i < s.length; i ++){
        
        if (s[i].match(/[A-Z]/g)) {
            arr[0]++
        } else  if (s[i].match(/[a-z]/g)) {
            arr[1]++
            
        }else  if (s[i].match(/[0-9]/g)) {
            arr[2]++
        }else{
            arr[3]++
        }
    }
    return arr   
}


console.log(solve("*'&ABCDabcde1245"))
console.log(solve("Codewars@codewars123.com"),[1,18,3,2]);
console.log(solve("bgA5<1d-tOwUZTS8yQ"),[7,6,3,2]);
console.log(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"),[9,9,6,9]);
console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"),[15,8,6,9]);
console.log(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"), [10,7,3,6])
console.log(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"), [7,13,4,10]);
