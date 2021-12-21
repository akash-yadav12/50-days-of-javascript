function mostFreq(arr) {
	// write your code here
    let mp = {}
    for(let el of arr){
      if(mp[el]){
        mp[el]++
      }else{
        mp[el] = 1
      }
    }
    let mx = 0
    let res
    for(let t in mp){
        if(mp[t] > mx) {mx = mp[t]; res=t}
    }
	return res+" "+ mx
}

const arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

console.log(mostFreq(arr));