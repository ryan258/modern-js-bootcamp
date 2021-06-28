const product = {
  name: 'Kill All Humans'
}

console.log(product.hasOwnProperty('name')) // true
console.log(product.hasOwnProperty('hasOwnProperty')) // false
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
//! has its OWN property, not an inherited one like hasOwnProperty
console.log(product) // we see hasOwnProperty is part of the __proto__
