// global (name, location)
//-- local (name)
//---- local
//-- local

//! we can define variablesof the same name in each different scope
let name = 'Orson'

if (true) {
  //! vv this is variable shadowing in JS - where a variable in local scope is used instead of the parent, hiding it from existance
  let name = 'Manny'
  if (true) {
    console.log(name) // Manny
  }
  if (true) {
    name = 'Ike'
    console.log(name) // Ike
    //! vv this will look all the way up the parent ladder, not find the variable declared, then declare that variable in the global scope automatically, thus making it available to all code blocks - this is called "A LEAKED GLOBAL" - where the variable was never explicitly defined
    location = 'Argentina'
  }
}

if (true) {
  console.log(name) // Orson
}
