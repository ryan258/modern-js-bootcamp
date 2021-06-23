// DOM - document object model
// - every time we're doing something to the HTML w/ JS, most likely we'll be using the DOM

// document.querySelector('.delete-me').remove()

// const p = document.querySelector('p').innerHTML
// console.log(p)

//! query all and remove
// const ps = document.querySelectorAll('p')
// ps.forEach((p) => p.remove())

let notes = [
  // {
  //   title: 'Study MERN',
  //   body: 'Do a little of Full Stack JS'
  // },
  // {
  //   title: 'Study CSS Grid',
  //   body: 'Certainly have courses on it. But we gotta make layouts!'
  // },
  // {
  //   title: 'Web Components',
  //   body: 'Maybe do a little web components csstinkering.'
  // }
]

//! ///// LOCAL STORAGE TIME ////
//! Check for existing saved data

let notesJSON = localStorage.getItem('notes')

if (notesJSON) {
  notes = JSON.parse(notesJSON)
  console.log(notes)
}

const filters = {
  searchText: ''
}

const renderNotes = (notes, filters) => {
  // limit notes to just those that pass our filters
  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
  // console.log(filteredNotes)
  document.querySelector('#notes').innerHTML = ''

  filteredNotes.forEach((note) => {
    const noteEl = document.createElement('p')

    if (note.title.length > 0) {
      noteEl.textContent = note.title
    } else {
      noteEl.textContent = 'Unnamed note 🤔'
    }

    document.querySelector('#notes').appendChild(noteEl)
  })
}

// initially render all the notes in the array
renderNotes(notes, filters)

// add event listener
document.querySelector('#create-note').addEventListener('click', (e) => {
  // console.log(e)
  // e.target.textContent = '👻 boo!'
  //! ///// LOCAL STORAGE TIME ////
  //! push item to the array
  notes.push({
    title: '',
    body: ''
  })
  //! then save new notes array to localStorage
  localStorage.setItem('notes', JSON.stringify(notes))
  // then we just rerender things
  renderNotes(notes, filters)
})

/*document.getElementById('remove-all').addEventListener('click', () => {
  console.log('delete all notes')
  document.querySelectorAll('.note').forEach((note) => note.remove())
})
*/

// get text input
document.querySelector('#search-text').addEventListener('input', (e) => {
  // console.log(e)
  // console.log(e.target.value)
  filters.searchText = e.target.value
  // rerender notes as things in the filter change
  renderNotes(notes, filters)
})

/*// get that form name data
document.querySelector('#name-form').addEventListener('submit', (e) => {
  e.preventDefault()
  // now we're the ones handling the form submission
  // look in e.target.elements for the form data
  console.log(e.target.elements.firstName.value)
  // then we can set the value back to empty in the UI
  e.target.elements.firstName.value = ''
  renderNotes(notes, filters)
})
*/

/*// handling checkboxes
document.querySelector('#for-prez').addEventListener('change', (e) => {
  console.log(e.target.checked)
})*/

// handling select list
document.querySelector('#filter-by').addEventListener('change', (e) => {
  console.log(e.target.value)
})
