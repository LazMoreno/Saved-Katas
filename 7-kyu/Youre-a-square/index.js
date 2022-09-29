var isSquare = function (n) {
	if (n >= 0 && Math.sqrt(n) % 1 === 0) {
		return true;
	} else return false;
};

// const isSquare = n => Number.isInteger(Math.sqrt(n));

console.log(-1); // false, "-1: Negative numbers cannot be square numbers"
console.log(0); // true, "0 is a square number (0 * 0)"
console.log(3); // false, "3 is not a square number"
console.log(4); //  true, "4 is a square number (2 * 2)"
console.log(25); // true, "25 is a square number (5 * 5)"
console.log(26); // false, "26 is not a square number"
