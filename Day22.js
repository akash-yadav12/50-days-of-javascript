let uniqueInOrder = (iterable) => {
  //your code here - remember iterable can be a string or an array
  res = []
  for(let i = 0;i<iterable.length-1;i++){
      if(iterable[i] != iterable[i+1]){
          res.push(iterable[i])
      }
  }
  res.push(iterable[iterable.length-1])
  return res
};
