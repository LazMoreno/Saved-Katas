function feast(beast, dish) {
	let beastFirst = beast[0];
	let beastLast = beast[beast.length - 1];
	let dishFirst = dish[0];
	let dishLast = dish[dish.length - 1];
	let result =
		beastFirst === dishFirst && beastLast === dishLast ? true : false;
	return result;
}

//Fancy Solution 👇
// function feast(beast, dish) {
//   return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
// }

console.log(feast("great blue heron", "garlic naan")); // true
console.log(feast("chickadee", "chocolate cake")); // true
console.log(feast("brown bear", "bear claw")); // false
