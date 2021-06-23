'use strict'

let todos = getSavedTodos()

const body = document.querySelector('body')

const filters = {
  searchText: '',
  hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})

//!! ADD TO-DO ITEM
document.querySelector('#add-todo-form').addEventListener('submit', (e) => {
  e.preventDefault()
  todos.push({
    id: uuidv4(),
    title: e.target.elements.todoTitle.value,
    completed: false
  })
  // localStorage.setItem('todos', JSON.stringify(todos))
  saveTodos(todos)
  renderTodos(todos, filters)
  e.target.elements.todoTitle.value = ''
})

document.querySelector('#hide-completed-button').addEventListener('change', (e) => {
  filters.hideCompleted = e.target.checked
  renderTodos(todos, filters)
})
