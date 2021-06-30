// ALLOWS US TO DO THINGS BEHIND THE SCENES!
//! w/ custom getters and setters we can define logic to override - we can do something behind the scenes to get or set a value
// good for
//!  - customizing the behavior of an object allowing it to fit our needs
//   - running some code whenever a property value gets set
//   - running some code whenever whenever someone reads a property value
// - if we wanted to do a little data sanitization/validation BTS
//!  - get - we can override what happens when someone reads a value
//!  - set - do something w/ the value like trim or validate
// you don't need a getter and setter for each property! though it is common...
const data = {
  locations: [],
  // method name will be the name of that property we're working with
  get location() {
    // allows us to override what happens when someone tries to fetch a value
    // return 'this is a test via getter'
    return this._location
  },
  //! vvv we're setting a new secret property that we've processed
  // and we can do plenty, exp more than one 1 thing!
  set location(value) {
    // gets called w/ an arg, called w/ a value the user tried to set
    value = value.trim()
    // since location is taken, we can't store the variable on location so we have to make a different name... just prefix it w/ an underscore
    this._location = value
    // we can push the value to our list of locations so we can keep track of where we've been
    this.locations.push(this._location)
    // console.log(this.locations)
  }
}

// code that uses the data object
data.location = '     Bentonville         '
data.location = ' Buenos Aires'
data.location = '     Springfield   '

console.log(data) // {_location: "Bentonville", locations: [...], getters, setters}
// somone trying to fetch a value
console.log(data.location)
