/**
 *
 * @param {number[]} inputArray Array of numbers
 */
const longestConsecutiveSequence = (inputArray) => {
	// Your code here
    let temp = inputArray.sort((a,b)=> a-b)
    let res = 1
    for(let i = 0;i<temp.length-1;i++){
        let buf = 1
        for(let j = i;j<temp.length-1;j++){
            if(temp[j+1] - temp[j] === 1){
                buf++
            }else{
                break
            }
        }
        res = Math.max(buf,res)
    }
	return res
}
