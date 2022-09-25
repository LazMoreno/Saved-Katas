function repeatStr(n, s) {
	let result = s.repeat(n);
	return result;
}

console.log(repeatStr(3, "*")); // "***"
console.log(repeatStr(5, "#")); // "#####"
console.log(repeatStr(2, "ha ")); // "ha ha "
