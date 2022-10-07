const input =
	"Thats nice all I was asking is for you to explain your code you wrote. Ive never seen the syntax before and wanted to know what it meant. It's ok I made a separate question and somebody answered my question in depth. Sorry for asking for so much much separate";

function countWords(string) {
	let legend = {};
	string
		.replace(/[\W_]+/g, " ")
		.split(" ")
		.forEach((word) => {
			if (legend[word]) {
				legend[word] += 1;
			} else {
				legend[word] = 1;
			}
		});
	console.log(legend);
}

countWords(input);

// const wordCount = (sentence) => {
// 	let result = [];
// 	let checkedWords = [];
// 	const trimmedSentence = sentence
// 		.toLowerCase()
// 		.replace(/[\W_]+/g, " ")
// 		.split(" ");

// 	trimmedSentence.forEach((word) => {
// 		if (!checkedWords.includes(word)) {
// 			let wordCount = trimmedSentence.filter(
// 				(oneWord) => oneWord === word
// 			).length;

// 			checkedWords.push(word);

// 			result.push({ word, count: wordCount });
// 		}
// 	});

// 	result.forEach((elem) => {
// 		console.log(`${elem.word}: ${elem.count}`);
// 	});

// 	return result.map((elem) => `${elem.word}: ${elem.count}`);
// };

// wordCount(input);
