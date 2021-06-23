// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

// the properties for number you'll nearly never use

let num = 103.941

// keep X decimal places
console.log(num.toFixed(2))

//! there is a Math object with a bunch of useful methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// round to the nearest whole number
console.log(Math.round(num)) // 104

// we can force it to round in one direction or the other
console.log(Math.floor(num)) // 103
console.log(Math.ceil(num)) // 104

// random
// console.log(Math.random() * 10) // random # btw 0 and 10

// let min = 46
// let max = 289
// let randomNumber = Math.floor(Math.random() * (max - min)) + min

// console.log(randomNumber)

// challenge - guessing game
let min = 1
let max = 5
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
let guess = Math.floor(Math.random() * (max - min + 1)) + min

if (randomNumber === guess) {
  console.log(`You win! (Your guess: ${guess} - Secret number: ${randomNumber})`)
} else {
  console.log(`You lost! (Your guess: ${guess} - Secret number: ${randomNumber})`)
}
