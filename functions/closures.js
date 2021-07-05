//! Closure - a combination of a function w/ the lexical scope in which it was defined
// The returned function still has access to the variable from the parent function
//! USES
// - it's because of closures that the inner functions have access to callback

// simple example of a closure
// - the function
const myClosure = () => {
  // - function creates a variable
  const message = 'This is my message!'
  // - the function creates another function
  //! when printMessage was defined it has access to message
  //! - therefor it will always have access to message
  //! - - even if the parent function completes
  const printMessage = () => {
    // - that calls the parent function's variable
    console.log(message)
  }
  // printMessage()
  // - return the function calling the variable
  return printMessage
}

// the variable create
const myPrintMessage = myClosure()
myPrintMessage() // tne message prints!

//! ////////////////////////////////////////////
//! #1. Using a closure to create a private variable
//- only accessible/modifiable via a very specific set of rules
//- return a set of methods that allow someone to interact w/ the variable in specific ways

const createCounter = () => {
  let count = 0 // there will be no access to this variable outside the methods

  return {
    increment() {
      count++
    },
    decrement() {
      count--
    },
    get() {
      return count
    }
  }
}

// the object with the methods is returned - so what the user can do is controlled and they can't hack the system
// - and they're all using closure to access count, there's no other way to modify the count!
const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get()) // -1

//! ADDER - (Currying - transforming a single function that takes a lot of argumentsinto multiple functions that take a subset of those arguments)

// uncurried
const add = (a, b) => a + b

// Curried
const createAdder = (a) => {
  return (b) => {
    return a + b
  }
}

// "a" is being declared for the new function
const add10 = createAdder(10)
// "b" is being used as an argument for the new function to apply "a" to
console.log(add10(-2)) // -8
console.log(add10(22)) // 32
// and we can create multiple adder functions
const add42 = createAdder(42)
console.log(add42(1)) // 43

//! TIPPER CHALLENGE
// 1. Create createTipper which takes in the base tip (.15 for 15% tip)
const createTipper = (tip) => {
  // 2. Set it up to return a function that takes in the bill amount
  return (bill) => {
    // return bill + bill * tip // get total w/ tip
    return bill * tip // just get tip
  }
}
// 3. Call createTipper to generate a few functions for different %ages
const tip10percent = createTipper(0.1)
const tip20percent = createTipper(0.2)
// 4. Use the generated functions to calculate tips and print them
console.log(tip10percent(100))
console.log(tip20percent(100))
