"use strict";

let maxNum = +prompt('Enter the max number', '');
let counter;

for (let i = 2; i <= maxNum; i++) {
	counter = 0;

	for (let j = 2; j <= i; j++) {
		if ((i % j === 0) && (i !== j)) {
			counter++;
		}
	}

	if (!counter) {
		console.log(i);
	}
}