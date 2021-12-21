const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3

function truncateWithWordLimit(str, wordLimit) {
    // write your solution here
    let temp = str.split(" ")
    let res = ''
    for(let i = 0;i<wordLimit;i++){
        res += temp[i]
        if(i !== wordLimit -1){
            res += " "
        }
    }
    return res
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`)
