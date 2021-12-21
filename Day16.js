function hey(message) {
	// Code here
    res = ''
    if(message[message.length-1] === '?'){

        if(message === message.toUpperCase()){
            return'Calm down, I know what I\'m doing!'
        }
        return 'Sure'
    }
    if(message === message.toUpperCase()){
        return 'Whoa, chill out!'
    }
    if(message === ""){
        return 'Fine. Be that way!'
    }
    return 'Whatever'

}
