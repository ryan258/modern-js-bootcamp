const square = (num) => num * num
const twentyFive = square(5)
console.log(twentyFive)

const critters = [
  {
    name: 'Orson',
    age: 21
  },
  {
    name: 'Manny',
    age: 20
  },
  {
    name: 'Bufalo',
    age: 18
  }
]

critters.forEach((critter) => console.log(critter.name))

const canDrink = critters.filter((critter) => critter.age >= 21).forEach((critter) => console.log(`${critter.name} because he's ${critter.age} years old!`))
// console.log(canDrink)

//! arguments only exist in regular functions
const add = function () {
  console.log(arguments)
}

// - there's no binding in arrow functions
// const add = () => {
//   console.log(arguments)
// }

add(11, 22, 33, 44, 55)

//! arrow functions don't have their own 'this' keyword

const car = {
  color: 'red',
  // getSummary: () => `I have a ${this.color} car`  // I have an undefined car
  getSummary() {
    return `I have a ${this.color} car` // I have a red car
  }
}
console.log(car.getSummary())
