//! Asynchronous execution - we can start a task, then actually get other work done before the task completes
// - we want to stick to async code to allow for other things to happen while waiting for long running tasks to finish

//! Synchronous execution -  we start a task and then wait for it to finish before starting the next thing

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

// we pass it a function, which will be a callback
//! the callback pattern - we pass in a function and we expect that function to be called with the info when it's ready
// this is an example of asynchronous execution
//!        vvv only one of these 2 will ever be defined
getPuzzle((error, puzzle) => {
  if (error) {
    console.log(`error: ${error}`)
  } else {
    console.log(puzzle)
  }
})

//! - just for example, not desireable...
// const puzzle = getPuzzleSync()
// console.log(puzzle)
// console.log('do something else') // we see this before anything else gets logged
