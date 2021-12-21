const valid = (string) => {
	// code here
    s = string.replaceAll(" ","")
    res = []
    f = 0
	for(let i = s.length-1;i>=0;i--){
        if(f){
          f = 0
          if(+s[i]*2 > 9){
              res.push(""+(+s[i]*2-9))
          }else{
              res.push(""+ (+s[i]*2))
          }
        }else{
          f = 1
          res.push(s[i])
        }

    }
    let sum = 0
    for(let el of res){
        sum += +el
    }
    return sum%10 === 0
}