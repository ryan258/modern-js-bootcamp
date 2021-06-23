//! /////////
//! USING OBJECTS w/ FUNCTIONS

const myBook = {
  title: 'Needful Things',
  author: 'Stephen King',
  pageCount: 456
}

const otherBook = {
  title: 'Taltos',
  author: 'Anne Rice',
  pageCount: 600
}

let getSummary = (book) => {
  return {
    summary: `${book.title} was written by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)
console.log(otherBookSummary.summary)

// challenge - take 'f and convert in 3 ways
let convertFarhenheit = (temp) => {
  return {
    farhenheit: temp,
    celcius: (temp - 32) * (5 / 9),
    kelvin: (temp + 459.67) * (5 / 9)
  }
}

let mildTemp = convertFarhenheit(74)
console.log(mildTemp)
