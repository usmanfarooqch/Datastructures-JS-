// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {

//     let maxNumberOccurances = 0;
//     let char;
//     for (character of str) {
//         if (maxNumberOccurances < str.split(character).length - 1) {
//             maxNumberOccurances = str.split(character).length - 1;
//             char = character;
//         }
//     }
//     return char;
// }










// function maxChar(str) {
//     let obj = new Object()
//     for (character of str) {
//         obj[character] = str.split(character).length - 1
//     }
//     return Object.keys(obj).reduce((accumulator, currentValue) => obj[accumulator] > obj[currentValue] ? accumulator : currentValue)
// }








module.exports = maxChar;
















