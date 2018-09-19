// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//  a = str.split('');
//  b = a.reverse();
//  c = b.join('')
// return c
// }
// reverse('apple')
// reverse('hello')
// reverse('greetings!')

// function reverse(str) {
//     let reversed ='';
//     for(let item of str) {
//       reversed = item + reversed;

//     }
//     return reversed
// }

function reverse(str) {
	a = str.split('');
	result = a.reduce((a, b) => {
		return b + a;
	});
	return result;
}

module.exports = reverse;
