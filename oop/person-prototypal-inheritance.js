//! Class function names start w/a capital letter
//! Leave "return" off of our constructor functions
//! Don't use Arrow functions -- bc they don't bind 'this' and 'this' is needed for OOP
//! Classes - create - instances

//! "new" operator
// - first generates a "new" empty object for this instance
// - then it gives us access to that empty object in the construct function
//   via the 'this' value
// - there is no need to return anything from a constructor function, bc the "new" is used
//   "new" makes the return value implicitly

const Person = function (firstName, lastName, age, likes = []) {
  // console.log(this) // this refers to the new empty object
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
  this.likes = likes
  // console.log(this) // Person {} // bc new first sets up that empty obj and this runs
}

//! Prototypal Inheritance -- instances point to the ancestors declared copy of the method on the prototype, each instance doesn't get their own copy of the method
//! --- PI is used ALOT behind the scenes of the JS language itself, like how strings and object have methods attached to them
//! EVERYTHING IN JS IS AN OBJECT! 😱
// - all objects have a prototypal property -- which is an object (on the object)
// -- usually you put just functions on the prototype, you can put other things but that doesn't really make sense because usually you want data to pertain customarily to each object
// --- on this object we put everything we want to share w/ instances of the constructor fn
//     so in this case methods (remember, no arrow function, we need access to 'this'!)
Person.prototype.getBio = function () {
  let bio = `${this.firstName} is ${this.age} years old.`

  this.likes.forEach((like) => {
    //! arrow functions don't bind a 'this' value, so this points at the thing calling it
    bio += ` ${this.firstName} likes ${like}.`
  })

  return bio
}
//! ^^^ now this method will be shared with all the instances of 'Person'
Person.prototype.setName = function (fullName) {
  const [firstName, lastName] = fullName.split(' ')
  this.firstName = firstName
  this.lastName = lastName
  // return
}

const me = new Person('Orson', 'Wells', 36, ['Grazing', 'Heffers'])

//! Property Shadowing - basically over writing a method on a single instance
// - is a property exists on the instance, it's going to be used , even if it also exists on the prototype
// - here we are straight up setting a new property on our instance and never goes up the prototype chain to look for the original one
// --- this has no effect on any other instances
me.getBio = function () {
  return 'this is fake'
}
console.log(me.getBio()) // Orson is 36 years old

// console.log(me) // Person {firstName: "Orson", lastName: "Wells", age: 36}
// console.log(me.age) // 36
// console.log(me.getBio()) // Orson is 36 years old
me.setName('Orsonious Gauge')
console.log(me.getBio()) // Orson is 36 years old

const otto = new Person('Otto', 'Man', 100000)
// console.log(otto) // Person {firstName: "Otto", lastName: "Man", age: 100000}
console.log(otto.getBio()) // Otto is 100000 years old

//! ^^^ but it makes more sense to pass the data through arguments so instances can have unique values

// const person = function () {
//   console.log(this) // this refers to the new empty object
//   this.firstName = 'Orson'
//   console.log(this) // person {firstName: "Orson"}
// }

// const me = new person()

// console.log(me)
