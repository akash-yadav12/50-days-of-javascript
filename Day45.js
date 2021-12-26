function findOutlier(integers) {
//yompur code here
  mp = [0,0]
  for(let el of integers){
      mp[el%2]++
  }
  toF = mp[1] === 1 ? 1 : 0
  for(let el of integers){
      if(el%2 === toF) return el
  }
}
