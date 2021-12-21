const number = '+91 9876543210';

function validateMobile(number) {
    // write your solution here
    if(number[0] === '+'){
        if(number.slice(1,3) !== '91'){
            return false
        }
        else{
            let temp = number.slice(3,)
            if(temp.length !== 10 && number[3] !== ' '){
                return false
            }
        }
        return true
    }else if(number[0] === '0'){
        let t = number.slice(1,)
        if(t.length !== 10 && number[1] !== " "){
            return false
        }
        return true
    }else if(number.length !== 10){
        return false
    }else{
        return true
    }
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)
