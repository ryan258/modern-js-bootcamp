// messing with the values of an object messes with that object
// since any usage or change is pointing to that same original object
// - an object just takes a piece of memory for its existance and from there it gets referenced unless with clone it in some manner

let myAcc = {
  name: 'Manny',
  expenses: 0,
  income: 0
}

// vv these are referencing the same object in memory
/* let otherAcc = myAcc // changes to otherAcc will be reflected in myAcc - "creates a binding"
otherAcc.income = 1000
otherAcc = {} // won't effect the original - it's only changing the properties where changes reflected in the references object - this "breaks the binding"
console.log(otherAcc)
*/

let addExpense = (acc, amt) => {
  // when we pass an obj into a function we can manipulate its properties
  // - and if we assign a new value to this object, we break the binding completely
  // acc = {} // <-- no longer pointing to that original object

  // what we really want is this vv
  acc.expenses = acc.expenses + amt
  console.log(acc)
}

// addExpense(myAcc, 1400)
// console.log(myAcc)

//! challenge - create an expense tracker
const addIncome = (acc, amt) => {
  acc.income += amt
}

const resetAcc = (acc) => {
  acc.expenses = 0
  acc.income = 0
}

const getAccSummary = (acc) => {
  console.log(`Account for ${acc.name} has $${acc.income - acc.expenses}. $${acc.income} in income and $${acc.expenses} in expenses.`)
}

addIncome(myAcc, 1000)
addExpense(myAcc, 100)
addExpense(myAcc, 50)
getAccSummary(myAcc)
resetAcc(myAcc)
getAccSummary(myAcc)
