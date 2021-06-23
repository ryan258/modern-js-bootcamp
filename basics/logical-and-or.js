let temp = 55

if (temp >= 60 && temp <= 90) {
  console.log('it is nice out')
} else if (temp >= 120 || temp <= -30) {
  console.log('better stay in...')
} else {
  console.log('free country...')
}

//! challenge
// - boolean for each guest if they are vegan
let isGuestOneVegan = false
let isGuestTwoVegan = false
// - are both vegan? offer only vegan dishes
// - at least one is vegan? offer up some vegan options
// - else offer anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('Here is our vegan menu...')
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('Here is our menu along with some vegan options.')
} else {
  console.log('Here is our full menu, none of that vegan stuff here!')
}
