// const getPuzzle = (wordCount) =>
//   new Promise((resolve, reject) => {
//     // now that we're working w/ a promise
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (e) => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         resolve(data.puzzle)
//       } else if (e.target.readyState === 4) {
//         reject('an error has taken place')
//       }
//     })

//     request.open('GET', `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send()
//   })

const getPuzzle = (wordCount) => {
  return (
    fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
      // in hte first then call we patch a figure if things went well or not
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        } else {
          throw new Error('Unable to fetch the puzzle')
        }
      })
      .then((data) => {
        return data.puzzle
      })
  )
  // .catch((err) => console.log(err))
}

//! COUNTRY PROMISE FUNCTION

/*const getCountry = (countryCode) =>
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
*/

// call this vvv over in app.js
// getCountry('AR', () => {})

//! Challenge - use fetch for getCountry
// - Convert getCountry to use fetch and return a promise
// - Make sure getCountry still resolves w/ the country that matches
// - change getCountry usage to useCatch
const getCountry = (countryCode) => {
  return fetch(`http://restcountries.eu/rest/v2/all`)
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      } else {
        throw new Error('Unable to fetch country')
      }
    })
    .then((data) => data.find((country) => country.alpha2Code === countryCode))
}

//! challenge
const getLocation = () => {
  return fetch(`https://ipinfo.io/107.134.11.93?token=11582e75c03a4c`).then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to fetch location')
    }
  })
}
