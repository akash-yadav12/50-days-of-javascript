function expandedForm(num) {
  // Your code here
  res = [];
  i = 1;
  while(num !== 0){
      if(num%10 === 0) continue
      res.push((num%10)*i);
      num = parseInt(num/10);
      i *= 10;
  }
  let n = res.length;
  let t;
    if(n == 2){
    t = res[0]
      res[0] = res[1]
      res[1] = t
  }
  for(let j = 0; j<=n/2;j++){
      t = res[j]
      res[j] = res[n-j-1]
      res[n-j-1] = t
  }
  return res.join('+')
}
