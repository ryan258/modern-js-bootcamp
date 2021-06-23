//Moment.js - gives us a much more usable API for working w/ dates and times
// https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment-with-locales.min.js

//! rocking momentjs.com

// we call moment() instead of creating a new Date() object
const now = moment()
// console.log(now.toString()) // Fri Jun 18 2021 09:42:25 GMT-0500
console.log(now.minute()) // 42
now.add(1, 'year').subtract(2, 'day')
console.log(now.toString()) // Fri Jun 18 2022 09:42:25 GMT-0500

// formatting
const formattedDate = now.format('MMMM Do, YYYY')
console.log(formattedDate)

// from now
const fromNowDate = now.fromNow()
console.log(fromNowDate) // in a year (bc we added a year above)

// working w/ unix time stamps
const nowInMilliseconds = now.valueOf()
console.log(nowInMilliseconds) // 1655392557416

// so we can pass this number from localStorage
// then access whatever we would want to access
console.log(moment(nowInMilliseconds).toString()) // Thu Jun 16 2022 10:18:27 GMT-0500
// so now we can use moment's super handy methods

//! challenge
// - make a new moment
const birthDay = moment()

// - set the month, day, year to your bday
// birthDay.set({ month: 6, day: 24, year: 1983 })
birthDay.year(1983).month(7).date(24)

// - use format to print it in the following way: (Jan 6, 1991)
const formattedBirthDay = birthDay.format('MMM D, YYYY')
console.log(formattedBirthDay)
