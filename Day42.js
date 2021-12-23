function sumTwoSmallestNumbers(numbers) {
  //Code below
  let res = [...new Set(numbers.sort((a,b)=> a-b))]
  return res[0]+res[1]
}
