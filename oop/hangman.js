const Hangman = function (word, remainingGuesses, guessedLetters = []) {
  this.word = word.trim().toLowerCase().split('')
  this.remainingGuesses = remainingGuesses
  this.guessedLetters = ['t', 'o', 'b', 'c']
}

Hangman.prototype.getPuzzle = function () {
  let wordDisplay = this.word.map((char) => {
    if (char === ' ') return char
    if (this.guessedLetters.includes(char)) return char
    return '*'
  })

  return wordDisplay.join('')
}

const game1 = new Hangman('scared otto', 25)
// console.log(game1)
console.log(game1.getPuzzle())

// const game2 = new Hangman('Cat', 3)
// console.log(game2)
