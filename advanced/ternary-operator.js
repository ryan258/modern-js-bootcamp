// ternary - (condition) ? true result : false result

const cowsAge = 32
let message

// if (cowsAge >= 18) {
//   message = 'You are old enough, but you are still a cow'
// } else {
//   message = 'You are not old enough to vote, but you are a cow any ways and not a citizen'
// }

message = cowsAge >= 18 ? 'You are old enough, but you are still a cow' : 'You are not old enough to vote, but you are a cow any ways and not a citizen'

console.log(message)

const team = ['Manny', 'Orson', 'Otto', 'Buffalo']
// const team = ['Manny', 'Orson', 'Otto', 'Buffalo', 'beep']

const messageToTeam = team.length <= 4 ? `Team size: ${team.length}` : `There are too many players on your team!`
console.log(messageToTeam)
