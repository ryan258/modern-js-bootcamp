//! in a boolean context...

// truthy values
// - []
// - {}

// falsey values
// - false
// - 0
// - ''
// - null
// - undefined
// - NaN

const products = []

console.log(products ? true : false)

const product = products[0]

console.log(product)
