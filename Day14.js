/**
 *
 * @param {number[]} digits Array of valid digits of baseA
 * @param {number} baseA base a
 * @param {number} baseB base b in which digits are to be converted
 * @returns {number[]} Array of valid digits of baseB
 */
const convertDigitsToAskedBase = (digits, baseA, baseB) => {
	// Your code here
       n = digits.join('')
    console.log(n)
    res = []
    if(baseA == 10){
        n = parseInt(n)
        while(n !== 0){
            res.push(Math.floor(n%baseB))
            n = Math.floor(n/baseB)
        }
        ret = []
        for(let i = res.length -1 ; i>=0;i--){
            ret.push(res[i])
        }
	    return ret
    }
    else if(baseA == 2){
        let j = 0
        let temp = 0
        for(let i = n.length-1;i>=0;i--){
            temp += Math.pow(baseB,i)
        }
        return temp.split('')
    }

}
