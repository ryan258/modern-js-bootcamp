//! you cannot return from a parent function inside of a child function, so you should do it this way instead - via callback pattern

//!-v- asynchronous -v- we go do other things while we're waiting for data to come back from the server
const getPuzzle = (callback) => {
  // callback('some fake puzzle')

  // make an http req
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      callback(undefined, data.puzzle)
    } else if (e.target.readyState === 4) {
      callback('an error has taken place', undefined)
      // console.log('an error has taken place')
    }
  })

  request.open('GET', 'https://puzzle.mead.io/puzzle?wordCount=3')
  request.send()
}

//! we'll make this request synchronous - just for example, not desireable...
/*const getPuzzleSync = () => {
  const request = new XMLHttpRequest()

  request.open('GET', 'https://puzzle.mead.io/puzzle?wordCount=3', false)
  request.send()
  // false makes things synchronous so the code below will not get run until we get the data

  if (request.readyState === 4 && request.status === 200) {
    const data = JSON.parse(request.responseText)
    return data.puzzle
    // callback(undefined, data.puzzle)
  } else if (request.readyState === 4) {
    throw new Error('Things did not go well')
    // callback('an error has taken place', undefined)
    // console.log('an error has taken place')
  }
}
*/
