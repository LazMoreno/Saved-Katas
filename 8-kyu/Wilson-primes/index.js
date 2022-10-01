function amIWilson(p) {
	// "The only known Wilson primes are 5, 13 and 563."
	return p == 5 || p == 13 || p == 563;
}

// const amIWilson = p => [5, 13, 563].indexOf(p) > -1

console.log(amIWilson(5)); // true
console.log(amIWilson(9)); // false
console.log(amIWilson(6)); // false
