const str = 'F(X) !== G(X) !== F(X)';

function getTheGapX(str) {
    // write your solution here
    if(str.indexOf('X') === -1){
        return -1
    }else if(str.lastIndexOf('X') === -1){
        return 0
    }else{
        let s = str.indexOf('X')
        let e = str.lastIndexOf('X')
        return e-s
    }
    return
}

console.log(`Gap between the X's: ${getTheGapX(str)}`)
