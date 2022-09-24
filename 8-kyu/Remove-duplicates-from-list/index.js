function distinct(arr) {
	return arr.filter((num, index) => arr.indexOf(num) === index);
}
