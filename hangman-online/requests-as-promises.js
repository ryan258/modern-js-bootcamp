const getPuzzle = (wordCount) =>
  new Promise((resolve, reject) => {
    // now that we're working w/ a promise
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        resolve(data.puzzle)
      } else if (e.target.readyState === 4) {
        reject('an error has taken place')
      }
    })

    request.open('GET', `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
  })

//! COUNTRY PROMISE FUNCTION

const getCountry = (countryCode) =>
  new Promise((resolve, reject) => {
    const countryRequest = new XMLHttpRequest()

    countryRequest.addEventListener('readystatechange', (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        const country = data.find((country) => country.alpha2Code === countryCode)
        // now we want to pass the country info into the callback
        resolve(country)
      } else if (e.target.readyState === 4) {
        reject('Unable to fetch data')
        // console.log('error occurred...')
      }
    })

    countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
    countryRequest.send()
  })

// call this vvv over in app.js
// getCountry('AR', () => {})
