const obj = {};

function isEmpty(obj) {
    // write your solution here
    if(Object.keys(obj).length === 0){
        return true
    }
    return false
}
console.log(`is empty object: ${isEmpty(obj)}`)
