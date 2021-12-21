const needsLicense = (kind) => {
	// code here
    if(kind === 'car' || kind === 'truck') return true
	return false
}

const chooseVehicle = (option1, option2) => {
	// code here
    if(option1 <= option2){
        return option1+" is clearly the better choice."
    }
	return option2 + " is cleary the better choice;"
}

const calculateResellPrice = (originalPrice, age) => {
	// code here
    if(age < 3){
        return originalPrice*(0.8)
    }if(age >= 3 && age <= 10) return originalPrice*(0.7)
	return originalPrice*(0.5)
}
