const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Cat Food', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)

  puzzleEl.textContent = game1.puzzle
  guessesEl.textContent = game1.statusMessage
})

// make an http req
const request = new XMLHttpRequest()
request.addEventListener('readystatechange', (e) => {
  // "e" is the request itself
  if (e.target.readyState === 4 && e.target.status === 200) {
    // console.log(e.target) // we get the JSON text
    // get status
    // console.log(e.target.status) // 200
    const data = JSON.parse(e.target.responseText) // we parse to get a JS object
    // console.log(data) // Object { puzzle: "Some Word" }
  } else if (e.target.readyState === 4) {
    console.log('an error has taken place')
  }
})
// .open(http-method, url) initializes our request
request.open('GET', 'https://puzzle.mead.io/puzzle?wordCount=3')
// then we send of the request to initiate the process
// - the server will takes so time for it to do what it's going to do and send back a response
request.send()
// - so we set up the event listener on our request wait for that response, a "readystatechange" and set it up w/ a function to run when that event happens
