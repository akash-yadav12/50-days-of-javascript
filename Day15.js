const isPangram = (input) => {
	// Code here
    mp = {}
    for(let t of input){
        
        if(t.match(/[a-z]/)){
            if(mp[t]){
                mp[t]++
            }else{
                mp[t] = 1
            }
        }
    }

	return (Object.keys(mp)).length === 26
}
