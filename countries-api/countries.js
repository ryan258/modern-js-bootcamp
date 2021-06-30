const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText)
    // console.log(data)
  } else if (e.target.readyState === 4) {
    console.log('an error has taken place')
  }
})

request.open('GET', 'https://restcountries.eu/rest/v2/all')
request.send()

//

const countryCode = 'AR'
const countryRequest = new XMLHttpRequest()

countryRequest.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText)
    const country = data.find((country) => country.alpha2Code === countryCode)
    console.log('Country: ', country.name)
  } else if (e.target.readyState === 4) {
    console.log('an error has taken place')
  }
})
countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
countryRequest.send()
