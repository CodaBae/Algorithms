// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//i think this one is good cause its really esay to understand, without much reaseoning 
// function capitalize(str) {
// 	let wordArray = [];

// 	for (let word of str.split(' ')) {
// 		wordArray.push(word[0].toUpperCase() + word.slice(1));
// 	}
// 	return wordArray.join(' ');
// }

//but looping is cool tho you can easliy get errors while logicing...you know what i mean
function capitalize(str) {
  let result = str[0].toUpperCase()
  for (let i = 1; i < str.length; i++){
    if (str[i -1]===' '){
      //result = result + str[i].toUpperCase()
      result +=  str[i].toUpperCase()
    }
    else{
     // result = result + str[i]
     result += str[i]
    }
  }
  return result;
}

module.exports = capitalize;
