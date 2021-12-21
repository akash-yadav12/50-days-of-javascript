function factorial(n) {
	// write your code here
    let f = 1
    for(let i = 1;i<=n;i++){
        f*=i
    }
	return f
}

let n = 4;
console.log("The factorial of " + n + " is " + factorial(n));