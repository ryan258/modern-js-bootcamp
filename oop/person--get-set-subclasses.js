// prototypal inheritance
// myPerson -> Person.prototype -> Object.prototype -> null

class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
  }

  getBio() {
    let bio = `${this.firstName} is ${this.age} years old.`

    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like}.`
    })

    return bio
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(' ')
    this.firstName = firstName
    this.lastName = lastName
  }
  // get for use in Employee's getBio()
  //! this would be considered a "computed property"
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes)
    this.position = position
  }
  //! also automatically inherits points to parent methods
  // but we can override parent methods to make them more approriate
  getBio() {
    return `${this.fullName} is a ${this.position}`
  }
  getYearsLeft() {
    return 65 - this.age
  }
}

const otto = new Employee('Otto', 'Man', 100000, 'Grifter', ['Crime', 'Larceny'])
// console.log(otto.position)
console.log(otto.getBio())

class Student extends Person {
  constructor(firstName, lastName, age, grade, likes) {
    super(firstName, lastName, age, likes)
    this.grade = grade
  }
  getBio() {
    return `${this.grade > 70 ? `${this.firstName} is passing the class!` : `${this.firstName} will never graduate...`}`
  }
  updateGrade(change) {
    this.grade += change
  }
}
