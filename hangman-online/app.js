//! Asynchronous execution - we can start a task, then actually get other work done before the task completes
// - we want to stick to async code to allow for other things to happen while waiting for long running tasks to finish

//! Synchronous execution -  we start a task and then wait for it to finish before starting the next thing

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1

// puzzleEl.textContent = game1.puzzle
// guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  render()
})

const render = () => {
  puzzleEl.textContent = game1.puzzle
  guessesEl.textContent = game1.statusMessage
}

const startGame = async () => {
  const puzzle = await getPuzzle(2)
  game1 = new Hangman(puzzle, 5)
  render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// we pass it a function, which will be a callback
//! the callback pattern - we pass in a function and we expect that function to be called with the info when it's ready
// this is an example of asynchronous execution
//!        vvv only one of these 2 will ever be defined
/*getPuzzle('3', (error, puzzle) => {
  if (error) {
    console.log(`error: ${error}`)
  } else {
    console.log(puzzle)
  }
})*/

/*//! //////////////////
//! NOW USING PROMISES
getPuzzle('4').then(
  (puzzle) => {
    console.log(puzzle + ` beep`)
  },
  (err) => {
    console.log(`Error: ${err}`)
  }
)
*/

//! - just for example, not desireable...
// const puzzle = getPuzzleSync()
// console.log(puzzle)
// console.log('do something else') // we see this before anything else gets logged

/*//! this code just cares about passing the country code in and getting results back
// it doesn't care where the results came from or how they came about
getCountry('AR').then(
  (country) => {
    console.log(`Country name: ${country.name}`)
  },
  (err) => {
    console.log(err)
  }
)
*/

//! //////////////////
//! NOW USING FETCH

/*fetch('http://puzzle.mead.io/puzzle', {})
  .then((response) => {
    // w/ fetch api we no longer have to worry about ready state, resolve and reject handle that for us
    //! so we just have to worry about how it completed, not if something
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to fetch the puzzle') // sends the process to .catch() for handling, it's like catch in a try catch statement
    }
  })
  .then((data) => {
    // do something w/ the parsed json
    console.log(data.puzzle)
  })
  .catch((err) => {
    console.log(err)
  })
  */

/*  getPuzzle('4') // we can use then bc getPuzzle() returns a fetch which returns a promise
  .then((puzzle) => {
    console.log(puzzle)
  })
  .catch((err) => {
    console.log(`Error: ${err}`)
  })
*/
// getCountry('AR')
//   .then((country) => {
//     console.log(country.name)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// getCurrentCountry()
//   .then((country) => {
//     console.log(country.name)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// getLocation()
//   .then((location) => getCountry(location.country))
//   .then((country) => {
//     console.log(country.name)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
