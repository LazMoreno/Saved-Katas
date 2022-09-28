const quarterOf = (month) => {
	// console.log({month})
	let quarter = 0;
	if (month < 4) return (quarter = 1);
	else if (month < 7) return (quarter = 2);
	else if (month < 10) return (quarter = 3);
	else if (month < 13) return (quarter = 4);
};

// const quarterOf = m => Math.ceil(m/3);

console.log(quarterOf(3)); // 1
console.log(quarterOf(8)); // 3
console.log(quarterOf(11)); // 4
