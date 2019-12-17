// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let minus = false

    if (n < 10 && n > 0) {
        return n
    }
    if (n > -10 && n < 0) {
        return n
    }
    if (n < 0) {
        n = n * -1
        minus = true
    }
    let quotient = n
    let arrayPush = []
    do {
        arrayPush.push((n % 10).toString())
        quotient = n / 10
        n = parseInt(quotient)
    } while (quotient > 10)
    arrayPush.push((n % 10).toString())

    if (minus) {
        return (parseInt(arrayPush.join("")) * -1)
    }
    else {
        return (parseInt(arrayPush.join("")))
    }
}


module.exports = reverseInt;
