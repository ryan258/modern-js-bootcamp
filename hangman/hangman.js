//! Get hangman in the browser
// 1. display puzzle in browser
// 2. display guesses left in browser
// 3. separate hangman definition from the rest of the code

const wordDisplay = document.querySelector('.word-display')
const remainingGuesses = document.querySelector('.guessesLeft')

const Hangman = function (word, remainingGuesses, guessedLetters = []) {
  this.word = word.trim().toLowerCase().split('')
  this.remainingGuesses = remainingGuesses
  this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function () {
  let wordDisplay = this.word.map((char) => {
    if (char === ' ') return char
    if (this.guessedLetters.includes(char)) return char
    return '*'
  })

  return wordDisplay.join('')
}

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase()
  const isUnique = !this.guessedLetters.includes(guess)
  const isBadGuess = !this.word.includes(guess)

  if (isUnique) {
    this.guessedLetters.push(guess)
  }

  if (isUnique && isBadGuess) {
    this.remainingGuesses--
  }
}
