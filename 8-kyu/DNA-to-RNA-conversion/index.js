// create a function which returns an RNA sequence from the given DNA sequence
const DNAtoRNA = (dna) =>
	dna
		.split("")
		.map((letter) => ("T" === letter ? "U" : letter))
		.join("");

// Fancy Solution with replace()
// const DNAtoRNA = dna => dna.replace(/T/g, 'U');

console.log(DNAtoRNA("TTTT")); // "UUUU"
console.log(DNAtoRNA("GCAT")); // "GCAU"
console.log(DNAtoRNA("GACCGCCGCC")); // "GACCGCCGCC"
