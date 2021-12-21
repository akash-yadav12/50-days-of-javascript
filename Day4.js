const time = '11:8PM';

function convertTo24HrsFormat(time) {
    // write your solution here
    let res = ''
    let [t1,t2] = time.split(':')
    if(t1.length === 1){
        time = '0' + time
    }
    if(t2.length === 3){
        time = time.slice(0,3)+'0'+time.slice(3,)
    }
    if(time[5] === 'A'){
        if(time[0]+time[1] === '12'){
            res = '00'+':'+time[3]+time[4]
        }else{
            res = time.substring(0,5)
        }
    }else{
        if(time[0]+time[1] === '12'){
            res = '12'+':'+time[3]+time[4]
        }else{
            res = parseInt(time[0]+time[1])+12 + ':'+time[3]+time[4]
        }
        
    }
    return res
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)
