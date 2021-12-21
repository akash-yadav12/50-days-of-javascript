function accum(s) {
  // your code goes below
   res = [s[0]]
  for(let i = 1;i<s.length;i++){
      temp = ""
      temp += s[i].toUpperCase()
      for(let j = 1; j<=i;j++){
          temp += s[i].toLowerCase()
      }
      res.push(temp)
  }
  return res.join("-")
}
