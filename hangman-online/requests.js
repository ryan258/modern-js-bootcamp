//! you cannot return from a parent function inside of a child function, so you should do it this way instead - via callback pattern

//!-v- asynchronous -v- we go do other things while we're waiting for data to come back from the server
const getPuzzle = (wordCount, callback) => {
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

  request.open('GET', `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
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

//! Challenge
// - Create a new function for getting country details
// - Call it w/ 2 arguments: country code & callback function
// - Make HTTP request and call the callback w/ country info
// - use the callback to print the country name

const getCountry = (countryCode, callback) => {
  const countryRequest = new XMLHttpRequest()

  countryRequest.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      const country = data.find((country) => country.alpha2Code === countryCode)
      // now we want to pass the country info into the callback
      callback(undefined, country)
    } else if (e.target.readyState === 4) {
      callback('Unable to fetch data', undefined)
      // console.log('error occurred...')
    }
  })

  countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
  countryRequest.send()
}

// call this vvv over in app.js
// getCountry('AR', () => {})
