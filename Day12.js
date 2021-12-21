const units = ["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
const tens = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]
const sayNumberInEnglish = (n /* ADD MORE PARAMETERS IF NEEDED */) => {
    // Write your solution here
    const places = {
        billion: 1000000000,
        million: 1000000,
        thousand: 1000,
        hundred: 100
    }
    let bil
    let mil
    let k
    let hun
    if(n >= places.billion){
        bil = parseInt(n/places.billion)
    }
    if(n >= places.million){
        mil = parseInt((n%places.billion)/places.million)
    }
    if(n >= places.thousand){
        k = parseInt((n%places.million)/places.thousand)
    }
    if(n >= places.hundred){
        hun = (n%places.thousand)
    }
    let ten = 0
    let unit = 0
    if(parseInt((n%100)) < 20){
        unit = units[n%100]
    }else{
        ten = tens[parseInt((n%100)/10)]
        unit = units[n%10]
    }
    
    res = ""
    if(bil){
        let tt
        if(bil >= 9){
            tt = getHundreds(bil)
        }else{
            tt = units[bil]
        }
        res +=  tt + " billion "
    }
    if(mil){
        let tt
        if(mil >= 9){
            tt = getHundreds(mil)
        }else{
            tt = units[mil]
        }
        res += tt + " million "
    }
    if(k){
        let tt
        if(k >= 9){
            tt = getHundreds(k)
        }else{
            tt = units[k]
        }
        res += tt + " thousand "
    }
    if(hun >= 9){
        res += getHundreds(hun)
    }else{
        res += units[hun]
    }

    return res
}
function getHundreds(n){
    let h = units[parseInt(n/100)]
    let t = n%100
    let x,y
    let ans = ""
    if(t < 20){
        y = units[t]
    }else{
        x = tens[parseInt(t/10)]
        y = units[t%10]
    }
    if(h){
        ans += h + " hundred "
    }
    if(x){
        ans += x
        if(y){
            ans += "-"
        }
    }
    if(y){
        ans += y
    }
    return ans
}

console.log(`5635 in english is: ${sayNumberInEnglish(9647474)}`)
