function getCount(str) {
  let vowelsCount = 0;
  // enter your magic here
  let vowels = ['a','e','i','o','u']
  for(let el of str){
      if(vowels.includes(el.toLowerCase())){
          vowelsCount++
      }
  }
  return vowelsCount;
}

console.log(getCount("abracadabra"));
