// const todos = [
let todos = [
  //! (localStorage) 1. Remove the hardcoded data
  // { title: 'Full Stack JS', completed: false },
  // { title: 'Web Components', completed: true },
  // { title: 'CSS Design', completed: false },
  // { title: 'Front-end Practice', completed: true },
  // { title: 'Learning to Learn', completed: false }
]

const body = document.querySelector('body')

//! 1. create filter object
const filters = {
  searchText: '',
  hideCompleted: false
}

//! (localStorage) 2. read and parse data when app starts up
const todosJSON = localStorage.getItem('todos')

if (todosJSON) {
  todos = JSON.parse(todosJSON)
  console.log(todos)
}

//! 3. initial render of todos
const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed

    return searchTextMatch && hideCompletedMatch

    // return todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })
  // wire up the hide all complete logic
  // .filter((todo) => !filters.hideCompleted || (!todo.completed && filters.hideCompleted))

  // another method of filtering completed todos
  /*filteredTodos = filteredTodos.filter((todo) => {
      if (filters.hideCompleted) {
        // if hide completed is true return true the non completed todos
        return !todo.completed // basically -> false
      } else {
        // all the todos stay in
        return true
      }
    })*/

  // a 3rd way
  // filteredTodos = filteredTodos.filter((todo) => !filters.hideCompleted || !todo.completed)

  // how many todos left
  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)
  // console.log(incompleteTodos)

  document.querySelector('#todos').innerHTML = ''

  const summary = document.createElement('h2')
  summary.textContent = `You have ${incompleteTodos.length} todos left!`
  document.querySelector('#todos').appendChild(summary)

  // document.querySelector('#todos').innerHTML = ''

  filteredTodos.forEach((todo) => {
    const p = document.createElement('p')
    p.textContent = todo.title
    document.querySelector('#todos').appendChild(p)
  })
}
// rerender as the data changes
renderTodos(todos, filters)

//! 2. add event listen for todo search input change render
document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})

//!! hide completed items checkbox
document.querySelector('#hide-completed-button').addEventListener('change', (e) => {
  // filters.hideCompleted = !filters.hideCompleted
  filters.hideCompleted = e.target.checked
  renderTodos(todos, filters)
})

//!! ADD TODO ITEM
document.querySelector('#add-todo-form').addEventListener('submit', (e) => {
  e.preventDefault()
  todos.push({
    title: e.target.elements.todoTitle.value,
    completed: false
  })
  //! (localStorage) 3. Stringify and write data when new data is added
  localStorage.setItem('todos', JSON.stringify(todos))
  e.target.elements.todoTitle.value = ''
  renderTodos(todos, filters)
})
