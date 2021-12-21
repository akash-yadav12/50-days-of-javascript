const timeToMixJuice = (name) => {
	// code here
    mp = {
        "Pure Strawberry Joy":0.5,
        "Energizer": 1.5,
        "Green Garden": 1.5,
        "Tropical Island": 3,
        "All or Nothing": 5 
    }
    if(Object.keys(mp).includes(name)){
        return mp[name]
    }
	return 2.5
}

const limesToCut = (wedgesNeeded, limes) => {
	// code here
    let c = 0
    let acc = wedgesNeeded
    for(let el  of limes){
        if(el === 'small'){
            acc -= 6
        }else if(el === 'medium'){
            acc -= 8
        }else{
            acc -= 10
        }
        c++
        if(acc <= 0){
            break
        }
    }
	return c
}

const remainingOrders = (timeLeft, orders) => {
	// code here
    let i = 0
    for(let el of orders){
        timeLeft -= timeToMixJuice(el)
        i++
        if(timeLeft <= 0){
            break
        }
    }
	return orders.slice(i,)
}
