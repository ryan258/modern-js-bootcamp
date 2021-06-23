// arrays are a method heavy data type

const notes = ['Note #1', 'Note #2', 'Note #3']
// if something doesn't exist at a position - returns undefined

// pop removes the item and returns it, so consider capturing the removed item in a variable
// console.log(notes.pop())
// notes.push('Note #4')

// shift and unshift work just like the
// pop and push but happen at the front of the array

// splice allows us to add elements to the middle of an array
// - or remove elements from anywhere in our list
// splice()
// - arg0 - the index to start where you're going to start taking your action
// - arg1 - number of things we're interested in removing
// - arg2 - item you want to add

// go for the middle item
// notes.splice(1, 1) // start at index of 1 and remove 1 item
// notes.splice(1, 0, 'this is a new item') // after the first item, this text gets slid into the 2nd spot and everything else moves over an index, nothing gets deleted
// notes.splice(1, 1, 'this is a new item') // this would replace that item
// but we can also change the value of an item using bracket notation
// notes[1] = 'Note #2.0'

//! .forEach() - do something to each array item
// - it's a super common array method
// - arg0 - the item we're accessing
// - arg1 - the index of current item
// notes.forEach((note, index) => console.log(note, index))

//! for loop
// - works on more than just arrays
// - we can arbitrarly state how many times we want it to run

// counting
/*for (let i = 1; i <= 3; i++) {
  // setTimeout(async () => {
  // await console.log(`I have ${i} ghost${i !== 1 ? 's' : ''} in my house`)
  console.log(`I have ${i} ghost${i !== 1 ? 's' : ''} in my house`)
  // }, 3000)
}

console.log('The Array:', notes)
console.log('Second Item:', notes[1])
console.log('The Array Length:', notes.length)

for (let count = 0; count < notes.length; count++) {
  console.log(notes[count])
}
*/

//! searching arrays

/*// arr.indexOf('a string') - returns the index if found -- if multiples are found it will return the position of the first one
console.log('indexOf(Note #1):', notes.indexOf('Note #1'))
console.log('indexOf(Note #2):', notes.indexOf('Note #2'))
// arr.indexOf('a string') - returns -1 if NOT found
console.log('indexOf(Note #X):', notes.indexOf('Note #X'))
// so if the value returned is x > -1 we know it's in the array
*/

//! but now we'll get fancy and use an array of objects for our notes
/*const oNotes = [
  {
    title: 'Study MERN',
    body: 'Do a little of Full Stack JS'
  },
  {
    title: 'Study CSS Grid',
    body: 'Certainly have courses on it. But we gotta make layouts!'
  },
  {
    title: 'Web Components',
    body: 'Maybe do a little web components tinkering.'
  }
]

console.log('length:', oNotes.length)
console.log('array:', oNotes)
// arr.indexOf('a string') - returns -1 if NOT found
console.log('indexOf():', oNotes.indexOf({}))

// so if the value returned is x > -1 we know it's in the array
// - so indexOf is going through looking for a === match - and {} === {} is false
//! so we can't use indexOf() to search through an array of objects

//! hello, arr.findIndex()!
// - this function gets called 1 time for each item in the array
// - we set this up to return true or false, true if the item passes our test
const index = oNotes.findIndex((note, index) => {
  // console.log(note.title)
  return note.title === 'Web Components'
})
// - so this is also really effecient because when it returns the first true, it stops running

console.log(index) // 2
*/

//! part 2 of searching arrays

const oNotes = [
  {
    title: 'Study MERN',
    body: 'Do a little of Full Stack JS'
  },
  {
    title: 'Study CSS Grid',
    body: 'Certainly have courses on it. But we gotta make layouts!'
  },
  {
    title: 'Web Components',
    body: 'Maybe do a little web components tinkering.'
  }
]

// const findNote = (notesToSearchIn, noteTitle) => {
//   // return actual note obj if we find one, undefined otherwise
//   const index = notesToSearchIn.findIndex((note, i) => note.title === noteTitle)
//   console.log(index)
//   if (index > -1) return notesToSearchIn[index]
//   return undefined
// }
/*const findNote = (notesToSearchIn, noteTitle) => {
  const index = notesToSearchIn.findIndex((note, i) => note.title.toLowerCase() === noteTitle.toLowerCase())
  return notesToSearchIn[index]
}

const foundNote = findNote(oNotes, 'study mern')
console.log(foundNote)*/

//! arr.find() does more of this for us - giving us the item back instead of the index
//            and returns undefined if nothing is found
/* const findNote = (notesToSearchIn, noteTitle) => notesToSearchIn.find((note, i) => note.title.toLowerCase() === noteTitle.toLowerCase())

const foundNote = findNote(oNotes, 'study mern')
console.log(foundNote)
*/

//! FILTER - a match returns true, then it is included in the new array
// - has index as a second arg
//

/* const fNotes = [
  {
    title: 'Study MERN',
    body: 'Do a little of Full Stack JS'
  },
  {
    title: 'Study CSS Grid',
    body: 'Certainly have courses on it. But we gotta make layouts!'
  },
  {
    title: 'Web Components',
    body: 'Maybe do a little web components csstinkering.'
  }
]

const fNotesDo = fNotes.filter((note) => note.title.toLowerCase().includes('do') || note.body.toLowerCase().includes('do'))
console.log(fNotesDo)

const findNotes = (notes, query) => {
  return notes.filter((note, i) => {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
    return isTitleMatch || isBodyMatch
  })
}

const filteredNotes = findNotes(fNotes, 'little')

console.log(filteredNotes)
*/

//! SORT
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const unsortedNotes = [
  {
    title: 'Study MERN',
    body: 'Do a little of Full Stack JS'
  },
  {
    title: 'Study CSS Grid',
    body: 'Certainly have courses on it. But we gotta make layouts!'
  },
  {
    title: 'Web Components',
    body: 'Maybe do a little web components csstinkering.'
  }
]

const sortNotes = (arr) => {
  arr.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1
    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1
    } else {
      return 0
    }
  })
}

sortNotes(unsortedNotes)
console.log(unsortedNotes)
