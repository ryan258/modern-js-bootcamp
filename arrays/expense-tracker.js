const account = {
  name: 'Orson the Cow',
  incomes: [],
  expenses: [],
  addIncome(description, amount) {
    this.incomes.push({ description: description, amount: amount })
  },
  addExpense(description, amount) {
    this.expenses.push({ description: description, amount: amount })
  },
  getAccountSummary() {
    let totalIncome = 0
    let totalExpenses = 0
    let accountBalance = 0

    this.expenses.forEach((expense) => (totalExpenses += expense.amount))
    this.incomes.forEach((income) => (totalIncome += income.amount))

    accountBalance = totalIncome - totalExpenses

    console.log(`${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`)
  }
}

console.log(account.expenses)
account.addExpense('cow insurance', 5)
account.addExpense('cow food', 1)
account.addExpense('cow college', 2)
account.addIncome('lotto ticket', 10)
account.addIncome('found in couch', 1)
console.log(account.expenses)
console.log(account.incomes)

account.getAccountSummary()
// create methods to put things in expenses
// const expense = {
//   description: '',
//   amount: -10
// }
