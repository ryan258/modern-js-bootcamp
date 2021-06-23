/*//!!!!! localStorage
// ---- - only supports strings!
//! localStorage Object - all about the CRUD
//! .setItem(key, value) - Creates & Updates
// localStorage.setItem('location', 'Bentonville')
//! .getItem(key) - Reads the data
console.log(localStorage.getItem('location'))
//! .removeItem(key) - Deletes data
// localStorage.removeItem('location')
//! delete all data in localStorage
localStorage.clear()
// ---- - localStorage only stores strings, but there are 2 methods that can help us work around that
//
*/

const user = {
  name: 'Orson the 🐮',
  age: 24
}

//! let's get user object stored in a local variable
// - JSON.stringify() will return whatever into it as a String
const userString = JSON.stringify(user)
localStorage.setItem('user', userString)
console.log(localStorage.getItem('user')) // outputs the user object as a string, and the keys are wrapped in double quotes
// {"name":"Orson the 🐮","age":24}

//! let's get the user data from the local variable
// - JSON.parse() will return the localStorage string into a JS thing
const userJSON = JSON.parse(localStorage.getItem('user'))
console.log(userJSON)
console.log(`Hello, ${user.name}`)
