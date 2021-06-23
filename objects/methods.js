//! method is an object that is attached to a method
// - just an object property whose value is a function

//! - inside our methods we have access to "this"
//   - "this" references the object that the method is defined on
//   - it's a way to access our object's properties inside the method

let restaurant = {
  name: "Lucy's",
  guestCapacity: 75,
  guestCount: 0,
  // areThereSeats: function(partySize) {
  areThereSeats(partySize) {
    console.log(this) // logs the obj w/ all its properties
    const seatsLeft = this.guestCapacity - this.guestCount
    if (partySize > seatsLeft) {
      console.log('we do not have enough seats available')
    } else {
      console.log('right this way')
    }
  },
  seatParty(guests) {
    this.guestCount += guests
  },
  removeParty(guests) {
    this.guestCount -= guests
  }
}

restaurant.seatParty(30)
console.log(restaurant)
restaurant.removeParty(20)
console.log(restaurant)
restaurant.areThereSeats(50)
