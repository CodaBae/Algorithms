
// Write a function called "getAllKeys" which returns an array of all the input object's keys.
// Example input:
// {
//   name : 'Sam',
//   age : 25,
//   hasPets : true
// }
// Function's return value (output) :
// ['name', 'age', 'hasPets']
// Do not use "Object.keys" to solve this prompt.
// Note that your function should be able to handle any object passed in it.
// E.g. it should also handle an input like:
// {
//   a : 'a',
//   number : 11,
//   hungry : true,
//   grammyWins : 1
// }
// Function's return value (output):
// ['a', 'number', 'hungry', 'grammyWins']
// Starter Code:
// function getAllKeys(obj) {
//   // your code here
// }


var object = { a : 'a', number : 11, hungry : true, grammyWins : 1 }

function getAllKeys(object) {
  newArray = []
  for (var key in object) {
   newArray.push(key)
  }
  return newArray
}
output = getAllKeys(object)
console.log(output)

