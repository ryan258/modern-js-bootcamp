//! Create a method for making a guess
// 1. should accept all characters for guessing
// 2. should add unique guesses to list of guesses
// 3. should decrement the guesses left if a unique guess isn't a match

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

  // if (this.guessedLetters.includes(guess)) {
  //   console.log('already guessed!')
  //   return
  // }
  // if (!this.guessedLetters.includes(guess) && this.word.includes(guess)) {
  //   console.log('you got one!!')
  // }

  // if (!this.guessedLetters.includes(guess) && !this.word.includes(guess)) {
  //   console.log(`no dice!! You have ${this.remainingGuesses} left!?! oh god...`)
  // }
}

// const game1 = new Hangman('Cat', 2)
// console.log(game1) // ***
//! Guess c, t, z
// game1.makeGuess('c')
// game1.makeGuess('t')
// game1.makeGuess('z')
// console.log(game1.getPuzzle()) // c*t
//! Print remaining guesses (should be 1)
// console.log(`You have ${game1.remainingGuesses} guess${game1.remainingGuesses - 1 ? 'es' : ''} remaining`)

// const game2 = new Hangman('New Jersey', 4)
//! Guess w
// game2.makeGuess('w')
// console.log(game2.getPuzzle()) // **w ******

const game1 = new Hangman('Cat', 2)

// show before the first guess
console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)

// respond to each guess
window.addEventListener('keypress', function (e) {
  const guess = String.fromCharCode(e.charCode)
  // console.log(guess)
  game1.makeGuess(guess)
  console.log(game1.getPuzzle())
  console.log(game1.remainingGuesses)
})
