//! Fun with dates!
// - but you're probably better off just using a library...

/*const now = new Date()
console.log(now.toString())
console.log(`Year: ${now.getFullYear()}`)
console.log(`Month: ${now.getMonth()}`)
console.log(`Day of Month: ${now.getDate()}`)
*/

// Unix Epoch - Jan 1st 1970 00:00:00
const now = new Date('June 18 2021 8:48:42')
// console.log(now.getTime()) // 1624024122000
const timestamp = now.getTime()
// get year of that time stamp
// convert it back to a useful value
const myDate = new Date(timestamp)
console.log(myDate) // Fri Jun 18 2021 08:48:42 GMT-0500 (Central Daylight Time)
console.log(myDate.getFullYear()) // 2021 (number)

//! challenge
// - create two dates
const time1 = new Date('August 24 1983 3:30:30')
const time2 = new Date('January 2 1970 02:22:20')
// - get time stamps for both
const timeStamp1 = time1.getTime()
const timeStamp2 = time2.getTime()
// - figure which came first and print its time, use string
if (timeStamp1 > timeStamp2) {
  // const myTime = new Date(timeStamp2)
  // console.log(`${myTime.getHours()}:${myTime.getMinutes()}:${myTime.getSeconds()}`)
  console.log(time1.toString())
} else if (timeStamp2 > timeStamp1) {
  console.log(time2.toString())
} else {
  console.log('omg they are the exact same time!')
}
