let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked) {
  console.log('Account is locked')
} else {
  console.log('Account is not locked, welcome...')
}

if (isAccountLocked) {
  console.log('omg acct is locked!')
} else if (userRole === 'admin') {
  console.log('admin! old buddy, old pal...')
} else {
  console.log('welcome')
}

//! challenge
// - its freezing
// - its hot
// - its fine

let temp = 45

if (temp <= 32) {
  console.log('it is freezing outside')
} else if (temp >= 120) {
  console.log('🔥')
} else {
  console.log('👍')
}
