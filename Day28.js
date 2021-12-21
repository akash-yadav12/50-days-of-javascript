function toWeirdCase(string) {
  // Your code goes here
  temp = string.split(" ")
  res = []
  let i = 0
  for(let word of temp){
      let buf = ""
      for(let ch of word){
          if(i%2 == 0){
              buf += ch.toUpperCase()
          }else{
              buf += ch.toLowerCase()
          }
          i++
      }
      i++
      res.push(buf)
  }
  return res.join(" ")
}

console.log(
  `The weird case of ${"A test case"} is ${toWeirdCase("A test case")}`
);
