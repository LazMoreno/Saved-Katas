function XO(str) {
	same = str.toLowerCase();
	let x = 0;
	let o = 0;
	for (let i = 0; i < same.length; i++) {
		if (same[i] === "x") {
			x++;
		} else if (same[i] === "o") {
			o++;
		}
	}
	return x === o;
}

//Fancy Solutions
// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }

// const XO = str => {
//   str = str.toLowerCase().split('');
//   return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
// }

// function XO(str) {
//   return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
// }

console.log(XO("xo")); // true
console.log(XO("xxOo")); // true
console.log(XO("xxxm")); // false
console.log(XO("Oo")); // false
console.log(XO("ooom")); // false
