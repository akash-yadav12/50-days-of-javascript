function isIsogram(str) {
  // your code here
  mp = {}
  for(let t of str){
      el = t.toLowerCase()
      if(mp[el]) mp[el]++
      else mp[el] = 1
  }
  return Object.keys(mp).length === str.length
}
