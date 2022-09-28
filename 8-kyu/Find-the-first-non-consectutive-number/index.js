function firstNonConsecutive(arr) {
	for (let i = 1; i < arr.length; i++) {
		if (arr[i - 1] + 1 !== arr[i]) return arr[i];
	}
	return null;
}

// firstNonConsecutive = (arr) =>
// 	arr.length == 1
// 		? null
// 		: arr[0] + 1 != arr[1]
// 		? arr[1]
// 		: firstNonConsecutive(arr.slice(1));

const first = firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]);
console.log(first); // 6
