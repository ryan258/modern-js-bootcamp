// Function - input, code, output

let greetUser = function () {
  console.log('Hello user!')
}

greetUser()

let square = function (num) {
  const result = num * num
  // console.log(result)
  return result
}

let value = square(3)
let value2 = square(10)

console.log(value)
console.log(value2)

//! Challenge 'f to 'c
function convertFarhenheitToCelsius(fTemp) {
  return (fTemp - 32) * (5 / 9)
}

console.log(convertFarhenheitToCelsius(0))
console.log(convertFarhenheitToCelsius(32))
console.log(convertFarhenheitToCelsius(68))
console.log(convertFarhenheitToCelsius(70))
