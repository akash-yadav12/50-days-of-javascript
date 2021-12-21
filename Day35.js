function nthlargest(arr, highest) {
	// write your code here
    const res = [...(new Set(arr.sort((a,b)=>{return b-a})))]
	return res[highest-1]
}

const arr = [43, 56, 23, 89, 88, 90, 99, 652];
const highest = 4;

console.log(nthlargest(arr, highest));