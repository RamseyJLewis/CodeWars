//Complete the solution so that it reverses the string passed into it.
function solution(str){
    let rev = str.split('')
    let array = rev.reverse()
    let string = array.join('')

    return string
      
}
console.log(solution('cat'))