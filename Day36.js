const transcription = (dna) => {
	// code here
    let mp = {'G':'C','C':'G', 'T':'A','A':'U'}
    let res = ''
    for(let el of dna){
        res += mp[el]
    }
	return res
}
