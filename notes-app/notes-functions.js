'use strict'
// console.log(uuidv4())

//! Read existing notes from localStorage
const getSavedNotes = () => {
  let notesJSON = localStorage.getItem('notes')

  // if (notesJSON) {
  //   return JSON.parse(notesJSON)
  // } else {
  //   return []
  // }

  try {
    return notesJSON ? JSON.parse(notesJSON) : []
  } catch (error) {
    // console.log(error)
    return []
  }
}

// let notesJSON = localStorage.getItem('notes')

// if (notesJSON) {
//   notes = JSON.parse(notesJSON)
//   console.log(notes)
// }

//! Save the notes to localStorage
const saveNotes = (notes) => localStorage.setItem('notes', JSON.stringify(notes))

//! Remove note from list
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => note.id === id)

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
  }
}

// localStorage.setItem('notes', JSON.stringify(notes))

//! Generate the DOM structure for a note
const generateNoteDOM = function (note) {
  const noteEl = document.createElement('div')
  const textEl = document.createElement('a')
  const button = document.createElement('button')

  // Set up remove note button
  button.textContent = 'X'
  noteEl.appendChild(button)
  button.addEventListener('click', () => {
    // console.log(note)
    removeNote(note.id)
    saveNotes(notes)
    renderNotes(notes, filters)
  })

  // Set up note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title
  } else {
    textEl.textContent = 'Unnamed note 🤔'
  }
  textEl.setAttribute('href', `./edit.html#${note.id}`)
  noteEl.appendChild(textEl)

  return noteEl
}

// const noteEl = document.createElement('p')

// if (note.title.length > 0) {
//   noteEl.textContent = note.title
// } else {
//   noteEl.textContent = 'Unnamed note 🤔'
// }

//! Sort notes in 1 of 3 eays
const sortNotes = (notes, sortBy) => {
  if (sortBy === 'byEdited') {
    return notes.sort((a, b) => {
      // a was more recently updated (larger #)
      if (a.updatedAt > b.updatedAt) {
        return -1
      } else if (b.updatedAt > a.updatedAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === 'byCreated') {
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1
      } else if (b.createdAt > a.createdAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === 'alphabetical') {
    return notes.sort((a, b) => {
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1
      } else if (b.title.toLowerCase() > a.title.toLowerCase()) {
        return -1
      } else {
        return 0
      }
    })
  } else {
    return notes
  }
}

//! Render application notes
const renderNotes = (notes, filters) => {
  notes = sortNotes(notes, filters.sortBy)

  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

  document.querySelector('#notes').innerHTML = ''

  filteredNotes.forEach((note) => {
    const noteEl = generateNoteDOM(note)

    document.querySelector('#notes').appendChild(noteEl)
  })
}

// generate the last edited message
const generateLastEdited = (timeStamp) => `Last edited ${moment(timeStamp).fromNow()}`
