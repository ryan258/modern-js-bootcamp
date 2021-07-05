// const getPuzzleOld = (wordCount) => {
//   return (
//     fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//       // in hte first then call we patch a figure if things went well or not
//       .then((response) => {
//         if (response.status === 200) {
//           return response.json()
//         } else {
//           throw new Error('Unable to fetch the puzzle')
//         }
//       })
//       .then((data) => {
//         return data.puzzle
//       })
//   )
// }

const getPuzzle = async (wordCount) => {
  const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to fetch the puzzle')
  }
}

//! combine other async functions
const getCurrentCountry = async () => {
  const location = await getLocation()
  // const country = await getCountry(location.country)
  // return country
  //-- shorter v
  return getCountry(location.country)
}

const getCountry = async (countryCode) => {
  const response = await fetch(`http://restcountries.eu/rest/v2/all`)
  if (response.status === 200) {
    const data = await response.json()
    // console.log(data)
    return data.find((country) => country.alpha2Code === countryCode)
  } else {
    throw new Error('Unable to fetch country')
  }
}

//! challenge
const getLocation = async () => {
  const response = await fetch(`https://ipinfo.io?token=11582e75c03a4c`)

  if (response.status === 200) {
    // const data = await response.json()
    // return data
    return response.json()
  } else {
    throw new Error('Unable to get current location')
  }
}
