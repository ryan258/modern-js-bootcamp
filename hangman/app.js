const game1 = new Hangman('Cat', 2)

// show before the first guess
wordDisplay.textContent = game1.getPuzzle()
remainingGuesses.textContent = game1.remainingGuesses + ' guesses left'

// respond to each guess
window.addEventListener('keypress', function (e) {
  const guess = String.fromCharCode(e.charCode)
  // console.log(guess)
  game1.makeGuess(guess)
  wordDisplay.textContent = game1.getPuzzle()
  remainingGuesses.textContent = game1.remainingGuesses
})
