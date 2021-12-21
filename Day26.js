function findOdd(arr) {
  //happy coding!
   mp = new Map()
  for(let el of arr){
      if(mp[el]){
          mp[el]++
      }else{
          mp[el] = 1
      }
  }
  console.log(mp)

  for(let key in mp){
      if(mp[key]%2 != 0){
          return parseInt(key)
      }
  }
  return 0;
}
