const stray = (numbers) => {
	let max = Math.max(...numbers);
	let min = Math.min(...numbers);
	return numbers.filter((index) => index === max).length === 1 ? max : min;
};

// const stray = nums => nums.reduce((a, b) => a ^ b);

console.log(stray([1, 1, 2])); // 2
