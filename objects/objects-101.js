// objects - good for mirroring real world objects

const myBook = {
  title: 'Needful Things',
  author: 'Stephen King',
  pageCount: 999
}

myBook.rating = 4.5

console.log(myBook)
console.log(myBook.title)

myBook.pageCount = 888
console.log(myBook.pageCount)

// challenge - model a critter
const manny = {
  name: 'Manny',
  age: 21,
  location: 'Arkansas'
}

console.log(`${manny.name} is ${manny.age} years old and lives in ${manny.location}`)
manny.age++
console.log(`${manny.name} is ${manny.age} years old and lives in ${manny.location}`)
