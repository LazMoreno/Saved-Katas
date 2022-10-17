const rentalCarCost = (days) => {
	if (days >= 7) {
		return 40 * days - 50;
	} else if (days >= 3) {
		return 40 * days - 20;
	} else {
		return 40 * days;
	}
};

// const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));

// Under 7 days

console.log(rentalCarCost(3)); // 100
console.log(rentalCarCost(4)); // 140
console.log(rentalCarCost(5)); // 180
console.log(rentalCarCost(6)); // 220

// More than 7 days

console.log(rentalCarCost(7)); // 230
console.log(rentalCarCost(8)); // 270
console.log(rentalCarCost(9)); // 310
console.log(rentalCarCost(10)); // 350
