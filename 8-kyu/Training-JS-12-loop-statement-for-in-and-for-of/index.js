const giveMeFive = (obj) => {
	let objArray = [];
	for (let i in obj) {
		if (i.length === 5) {
			objArray.push(i);
		}
		if (obj[i].length === 5) {
			objArray.push(obj[i]);
		}
	}

	return objArray;
};

console.log(giveMeFive({ Our: "earth", is: "a", beautyful: "world" })); // ["earth","world"]
console.log(
	giveMeFive({ Ihave: "enough", money: "to", buy: "a", car: "model" })
); // ["Ihave","money","model"]
console.log(giveMeFive({ Pears: "than", apple: "sweet" })); // ["Pears","apple","sweet"]
