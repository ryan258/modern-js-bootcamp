// why const - so you know later in the code that your variable doesn't get reassigned
// - only applies if you're trying to reassign a variable's value
//   - so you can manipulate the contents of an object/array
// -

let isRaining = true
isRaining = false
console.log(isRaining)

const isSnowing = true
// isSnowing = false //! ERROR - TypeError
console.log(isSnowing)
