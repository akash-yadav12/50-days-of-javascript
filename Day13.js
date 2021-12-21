const spaceAge = (seconds) => {
	const yearsInAllPlanets = {
		Mercury: 0,
		Venus: 0,
		Earth: 0,
		Mars: 0,
		Jupiter: 0,
		Saturn: 0,
		Uranus: 0,
		Neptune: 0,
	}
    earth = seconds/31557600
    yearsInAllPlanets.Earth = parseFloat((earth).toFixed(2))
    yearsInAllPlanets.Mercury = parseFloat((earth/0.2408467).toFixed(2))
    yearsInAllPlanets.Venus = parseFloat((earth/0.61519726).toFixed(2))
    yearsInAllPlanets.Mars = parseFloat((earth/1.8808158).toFixed(2))
    yearsInAllPlanets.Jupiter = parseFloat((earth/11.862615).toFixed(2))
    yearsInAllPlanets.Saturn = parseFloat((earth/29.447498).toFixed(2))
    yearsInAllPlanets.Uranus = parseFloat((earth/84.016846).toFixed(2))
    yearsInAllPlanets.Neptune = parseFloat((earth/164.79132).toFixed(2))


	// Your solution starts here

	// Your solution ends here

	return yearsInAllPlanets
}

console.log(spaceAge(Math.round(Math.random() * 999999999)))
