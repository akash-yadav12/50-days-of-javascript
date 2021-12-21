function gcd(a, b) {
	// write your code here
    let t
    while(b!=0){
        t = a%b
        a = b
        b = t
    }
	return a
}

const a = 2154
const b = 458

console.log("The GCD of " + a + " ", b + " is " + gcd(a, b));