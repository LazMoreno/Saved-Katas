function getMiddle(string) {
	let position;
	let length;

	if (string.length % 2 == 1) {
		position = string.length / 2;
		length = 1;
	} else {
		position = string.length / 2 - 1;
		length = 2;
	}

	result = string.substring(position, position + length);
	console.log(result);
	return result;
}

// const getMiddle = (string) =>
// 	string.substr(
// 		Math.ceil(string.length / 2 - 1),
// 		string.length % 2 === 0 ? 2 : 1
// 	);

console.log(getMiddle("test")); // "es"
console.log(getMiddle("testing")); // "t"
console.log(getMiddle("middle")); // "dd"
console.log(getMiddle("A")); // "A"
