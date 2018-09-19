// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let sA= stringA.replace(/[^\w]/g,'').toLowerCase()
    let sB= stringB.replace(/[^\w]/g,'').toLowerCase()
    const a ={}
    const b ={}
    let r = false
    for(let item of sA) {
      !a[item]? a[item]=1:a[item]
    }
    
    for(let item of sB) {
        !b[item]? b[item]=1:b[item]
    }
    
    if(sA.length === sB.length && sA === sB){
      return  r = true
    }else{
        return r= false
    }
    return r
}

module.exports = anagrams;
