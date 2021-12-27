function findNeedle(haystack) {
  // your code here
  for(let el in haystack){
      if(haystack[el] === 'needle') return "found the needle at position " + el
  }
}
