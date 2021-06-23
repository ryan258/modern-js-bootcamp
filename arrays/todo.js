// const todos = ['Full Stack JS', 'Web Components', 'CSS Design', 'Front-end Practice', 'Learning to Learn']

//! challenge #1
// console.log(todos[todos.length - 1])
// console.log(todos[todos.length - 2])

//! challenge #2
/*// delete 3rd item
todos.splice(3, 1)
// add new item to the end
todos.push('Eat')
// remove 1st item from the list
todos.shift()
*/

//! challenge #3
// todos.forEach((todo, index) => console.log(`${index + 1}. ${todo}`))

//! challenge #4
// for (let i = 0; i < todos.length; i++) {
//   console.log(`${i + 1}. ${todos[i]}`)
// }

//! challenge #5

/*// convert todos array to an array of objects w/ 2 properties: title (original text), and a completed property t/f
const todos = [
  { title: 'Full Stack JS', completed: false },
  { title: 'Web Components', completed: true },
  { title: 'CSS Design', completed: false },
  { title: 'Front-end Practice', completed: true },
  { title: 'Learning to Learn', completed: false }
]

// create function to remove a todo by text value
const deleteToDo = (targetArray, searchTitle) => {
  const index = targetArray.findIndex((item, i) => {
    // the search criteria
    return searchTitle.toLowerCase() === item.title.toLowerCase()
  })
  // console.log(index)
  if (index > -1) targetArray.splice(index, 1) // splice works here because it's taking advantage of reference
}

deleteToDo(todos, 'web components')
console.log(todos) */

// lets filter!
const todos = [
  { title: 'Full Stack JS', completed: false },
  { title: 'Web Components', completed: true },
  { title: 'CSS Design', completed: false },
  { title: 'Front-end Practice', completed: true },
  { title: 'Learning to Learn', completed: false }
]

//! challenge #6

const getThingsTodo = (todoList) => todoList.filter((todo) => (todo.completed ? false : true))

console.log(getThingsTodo(todos))

//! challenge #7 - sort by completed

const sortTodos = (arr) => {
  arr.sort((a, b) => {
    if (!a.completed && b.completed) {
      return -1
    } else if (a.completed && !b.completed) {
      return 1
    } else {
      return 0
    }
  })
}

sortTodos(todos)
console.log(todos)

// console.log(`You have ${todos.length} things to do! 👻`)
// console.log(todos)
