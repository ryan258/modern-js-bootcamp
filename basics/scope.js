// JS uses "Lexical Scoping" aka Static Scoping
// - where a variable defined in one part of your program might not be accessible everywhere else in your program
// - the context of where the variable is defined and used comes into play
//   - in this case, code blocks, curly braces! {}

// there are two types of scope
// - global scope - defined outside of all code blocks
// - local scope - defined inside a code block

//! in a scope you can access variables defined in that scope, or in any parent/ancestor scope
// Glocal scope (varOne)
//-- Local scope (varTwo)
//---- Local scope (varFour)
//-- Local scope (varThree)

// is in the global scope
let varOne = 'varOne'

if (true) {
  console.log(varOne)
  // is in the local scope
  // vv a "local" variable
  let varTwo = 'varTwo'
  console.log(varTwo)
  if (true) {
    let varFour = 'varFour'
  }
}

if (true) {
  let varThree = 'varThree'
}

// and not available here
// console.log(varTwo)
