// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

let name = 'Ike the Coke Bear'

// length property
// - it's not a method so we don't need to add () to call it
console.log(name.length) // 17

console.log(name.toUpperCase()) // IKE THE COKE BEAR
console.log(name) // Ike the Coke Bear
console.log(name.toLowerCase()) // ike the coke bear
console.log(name) // Ike the Coke Bear

let password = 'fdjasfjnpassworddsalfhgla'
console.log(password.includes('password')) // true

let toBeTrimmed = '  ike   '
console.log(toBeTrimmed) //   ike
console.log(toBeTrimmed.trim()) // ike

//! challenge - passwrod test

const isValidPassword = (password) => {
  // if (password.length > 8 && !password.includes('password')) {
  //   console.log(`${password} is a VALID password`)
  // } else {
  //   console.log(`${password} is an INVALID password`)
  // }
  // or just do this to deal with a true false return value
  return password.length > 8 && !password.includes('password')
}
console.log(isValidPassword('pizza4eva')) // true
console.log(isValidPassword('pizza4evapassword')) // false
