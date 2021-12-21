function findEvenIndex(arr) {
  //Code goes here!
  let lsum = arr[0]
  let rsum = 0
  for(let i = 2;i<arr.length;i++){
      rsum+=arr[i]
  }
if(lsum === rsum)return 1
  for(let i = 2;i<arr.length-1;i++){
      lsum += arr[i-1]
      rsum -= arr[i]
      if(lsum === rsum) return i
  }
  return -1
}
