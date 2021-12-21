function spinWords(string) {
  //TODO Have fun :)
temp = string.split(" ")
  res = []
  let t;
  for(let el of temp){
      if(el.length >= 5){
        console.log(el)
          tt = ''
          for(let i = el.length-1;i>=0;i--){
              tt += el[i]
          }
          el = tt
      } 
    res.push(el)
  }
  return res.join(" ")
}
