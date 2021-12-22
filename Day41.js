function openOrSenior(data) {
  // your code goes below
  res = []
  for(let el of data){
      if(el[0]>=55 && el[1]>7){
          res.push("Senior")
      }else{
          res.push("Open")
      }
  }
  return res
}

let output = openOrSenior([
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
]);

console.log(output);
