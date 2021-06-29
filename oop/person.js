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

const me = new Person('Orson', 'Wells', 36, ['Grazing', 'Heffers'])

// me.getBio = function () {
//   return 'this is fake'
// }
console.log(me.getBio())

me.setName('Orsonious Gauge')
console.log(me.getBio())

const otto = new Person('Otto', 'Man', 100000)

console.log(otto.getBio())
