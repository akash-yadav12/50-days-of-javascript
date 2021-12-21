const str = "JavaScript is awesome"

function reverseAString(str) {
    // write your solution here
    let n = str.length
    let res = new Array(n)
    for(let el in str){
        res[n-el-1] = str[el]
    }
    return res.join('')
}

console.log(`Reversed string is: ${reverseAString(str)}`)
