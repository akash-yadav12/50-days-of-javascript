function getDivisorsCnt(num) {
  // code below
  let c = 2
  for(let i = 2;i<num;i++){
      if(num%i === 0) c++
  }
  return c
}
