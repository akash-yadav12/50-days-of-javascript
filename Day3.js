const num = 3849;

function reverseGivenInteger(num) {
    // write your solution here
    let res = 0
    while(num !== 0){
        res = (res*10) + (num%10)
        num = Math.floor(num/10)
    } 
    return res
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)
