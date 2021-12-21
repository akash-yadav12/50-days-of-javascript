function wave(str) {
  // Your Code goes below
  res = []
  for(let i = 0;i<str.length;i++){
      if(str[i] === " "){
              continue
    }
      temp = ""
      for(let j = 0;j<str.length;j++){
          if(j == i){
              temp += str[j].toUpperCase()
          }else{
              temp += str[j]
          }
      }
      res.push(temp)
  }
  return res
}

console.log(wave("two words"));
