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

  setName(fullName) {
    const [firstName, lastName] = fullName.split(' ')
    this.firstName = firstName
    this.lastName = lastName
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
    return `${this.firstName} ${this.lastName} is a ${this.position}`
  }
  getYearsLeft() {
    return 65 - this.age
  }
}

const me = new Person('Orson', 'Wells', 36, ['Grazing', 'Heffers'])
me.setName('Orsonious Gauge')
console.log(me.getBio())

const me2 = new Employee('Snow', 'Ball', 16, 'Town Drunk', ['Looking off into space', 'What?!'])
me2.setName('Snowey Bizzals')
console.log(me2.getBio())
console.log(me2.getYearsLeft())

const otto = new Employee('Otto', 'Man', 100000, 'Grifter', ['Crime', 'Larceny'])
console.log(otto.position)
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

const ralph = new Student('Ralph', 'Wiggum', 12, 60, ['paint chips', 'trains'])
console.log(ralph.getBio())
ralph.updateGrade(100)
console.log(ralph.getBio())
