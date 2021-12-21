function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	// write your solution here
    let res = Math.random()*(rangeEnd-rangeStart) + rangeStart
	return res
}

console.log(`My random number: ${randomNumberGeneratorInRange(1, 3)}`)
