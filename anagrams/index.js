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
    stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
    stringB = stringB.replace(/[^\w]/g, "").toLowerCase();

    if (stringA.length !== stringB.length) {
        return false;
    }


    //first solution 
    // stringAObj = createObject(stringA);
    // stringBObj = createObject(stringB);

    // for (key in stringAObj) {
    //     if (stringAObj[key] !== stringAObj[key]) {
    //         return false;
    //     }
    // }
    // return true;


    //second solution
    //     for (chracter of stringA) {
    //     if (!(stringB.includes(chracter))) {
    //         return false;
    //     }
    // }
    // return true;


    //third Solution
    stringA = stringA.split('').sort().join('')
    stringB = stringB.split('').sort().join('')
    return (stringA === stringB) ? true : false



}


function createObject(string) {
    let obj = {};
    for (chracter of string) {

        //one way
        obj[chracter] = obj[chracter] ? obj[chracter] + 1 : 1

        //other way
        // if(obj[chracter])
        // {
        //     obj[chracter]++;
        // }
        // else{
        //     obj[chracter] = 1;
        // }
    }

    return obj;
}

















function test(stringA, stringB) {
    stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
    stringB = stringB.replace(/[^\w]/g, "").toLowerCase();
    if (stringA.length !== stringB.length) {
        return "not e"
    }
    else {
        const objA = createObj(stringA);
        const objB = createObj(stringB);
        for (var key in objA) {
           
            if (objA[key]!==objB[key]) {
              return "problem"
            }
          }
        return "great"
    }


}

function createObj(stringA) {
    const obj = {}
    for (character of stringA) {
        obj[character] = (obj[character]) ? obj[character] + 1 : 1
    }
  return obj
}


console.log(test('rail safety', 'fairy tale'))







module.exports = anagrams;
