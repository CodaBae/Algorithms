// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// really had to think this thourgh...the truth is i piped from a source
function steps(n) {
	for (let col = 0; col < n; col++) {
		let result = '';

		for (let row = 0; row < n; row++) {
			if (row <= col) {
				result += '#';
			} else {
				result += ' ';
			}
		}
		console.log(result);
	}
}

module.exports = steps;
