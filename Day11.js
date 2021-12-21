function fibonacci(n) {
	// write your solution here
    a = 0
    b = 1
    if(n == 0)return a
    if(n == 1 || n == 2) return b
    for(let i = 2; i<=n;i++){
        t = a+b
        a = b
        b = t
    }
	return t
}

console.log(`fibonacci value at position 5: ${fibonacci(5)}`)
