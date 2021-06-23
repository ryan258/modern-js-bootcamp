// using type coercion is good for falsey/truthy things
// - but we typically want to stay away from type coercion for other things

console.log(5 + '5') // '55'
console.log('5' - 5) // 0
console.log(5 == '5') // true
console.log(5 === 5) // true

console.log(typeof 123) // 'number'

const value = true + 12
console.log(value) // 13 - because true turns into a 1 (false would be 0)
const type = typeof value
console.log(type) // 'number'
