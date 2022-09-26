// My solution below
function doubleChar(str) {
	let sum = [];

	for (let i = 0; i < str.length; i++) {
		let result = str[i] + str[i];

		sum = sum + result;
	}

	return sum;
}

// Fancy Solution 👇
// const doubleChar = (str) => str.split("").map(c => c + c).join("");

console.log(doubleChar("abcd")); // "aabbccdd"
console.log(doubleChar("Adidas")); // "AAddiiddaass"
console.log(doubleChar("1337")); // "11333377"
console.log(doubleChar("illuminati")); // "iilllluummiinnaattii"
console.log(doubleChar("123456")); // "112233445566"
console.log(doubleChar("%^&*(")); // "%%^^&&**(("
