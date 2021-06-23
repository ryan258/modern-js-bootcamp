'use strict'

//! Fetch existing todos from localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos')

  try {
    return todosJSON ? JSON.parse(todosJSON) : []
  } catch (error) {
    return []
  }

  // if (todosJSON) {
  //   return JSON.parse(todosJSON)
  // } else {
  //   return []
  // }
}

//! Save todos to localStorage
const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

//! Remove Todo by ID
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id)

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
}

//! Toggle the completed value
const toggleTodo = (id) => {
  console.log('I have been toggled!')

  const todo = todos.find((todo) => todo.id === id)
  console.log(todo)
  if (todo) {
    todo.completed = !todo.completed
  }
}

//! Render application todos based on filters
const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.title.toLowerCase().includes(filters.searchText.toLowerCase())

    const hideCompletedMatch = !filters.hideCompleted || !todo.completed
    // debugger

    return searchTextMatch && hideCompletedMatch
  })

  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

  document.querySelector('#todos').innerHTML = ''

  document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

  filteredTodos.forEach((todo) => {
    document.querySelector('#todos').appendChild(generateTodoDOM(todo))
  })
}

//! Get the DOM elements for an individual todo
const generateTodoDOM = (todo) => {
  const todoEl = document.createElement('div')
  const checkBoxEl = document.createElement('input')
  const todoText = document.createElement('span')
  const removeButton = document.createElement('button')

  // setup todo checkbox
  checkBoxEl.setAttribute('type', 'checkbox')
  // if (todo.completed) {
  //   checkBoxEl.setAttribute('checked', 'true')
  // }
  checkBoxEl.checked = todo.completed
  todoEl.appendChild(checkBoxEl)
  checkBoxEl.addEventListener('change', () => {
    toggleTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })

  // setup todo text
  todoText.textContent = todo.title
  todoEl.appendChild(todoText)

  // setup todo remove button
  removeButton.textContent = 'X'
  removeButton.addEventListener('click', () => {
    removeTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })
  todoEl.appendChild(removeButton)

  return todoEl
}

//! Get the DOM elements for the list summary
const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement('h2')
  summary.textContent = `You have ${incompleteTodos.length} todos left!`
  return summary
}
