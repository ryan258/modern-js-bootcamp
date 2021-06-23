let temp = 180

// let isFreezing = false;
// let isFreezing = temp === 31; // true
// let isFreezing = temp === 32; // false
// let isFreezing = temp !== 32; // true
// let isFreezing = temp < 32; // true
// let isFreezing = temp > 32; // false
let isFreezing = temp <= 31 // true

console.log(isFreezing)

if (isFreezing) {
  console.log('Brrrrrr.....')
}

// of course we could just use the comparison in the if condition
if (temp <= 31) {
  console.log('Brrrrrr! 👻')
}

if (temp >= 110) {
  console.log('🔥')
}

//! challenge
let age = 70

//! challenge 1
// - 7 or under you get a discount
// - 65 or older you get a senor discount
// - everyone else, standard age

// let isChild = age <= 7
// let isSenor = age >= 65

// console.log('Child discount:', isChild)
// console.log('Senor discount:', isSenor)

//! challenge 2
// - if 7 or under print msg about child pricing
// - if 65 or older print msg about senor pricing
if (age <= 7) console.log('ask about our child discount!')
if (age >= 65) console.log('ask about our senor discount!')
