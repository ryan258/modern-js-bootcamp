'use strict'

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const dateElement = document.querySelector('#last-edited')

// get the id for the note that the user is trying to edit
const noteId = location.hash.substring(1)
// console.log(noteId)

// get the proper data in localStorage - local storage is shared across all pages on a domain
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteId)
// console.log(note)

if (!note) location.assign('./index.html')

// initial values on edit page load
titleElement.value = note.title
bodyElement.value = note.body
dateElement.textContent = generateLastEdited(note.updatedAt)

titleElement.addEventListener('input', (e) => {
  note.title = e.target.value
  note.updatedAt = moment().valueOf()
  dateElement.textContent = generateLastEdited(note.updatedAt)
  saveNotes(notes)
})

bodyElement.addEventListener('input', (e) => {
  note.body = e.target.value
  note.updatedAt = moment().valueOf()
  dateElement.textContent = generateLastEdited(note.updatedAt)
  saveNotes(notes)
})

removeElement.addEventListener('click', () => {
  removeNote(noteId)
  saveNotes(notes)
  location.assign('./index.html')
})

// sync updates between windows
// - storage fires when any data in localStorage changes
//   - latest data lives on the event arg
window.addEventListener('storage', (e) => {
  // debugger
  //console.log('some data changed!?!')
  // so we want to rock the key we care about (array)
  // run when the correct storage key changes
  if (e.key === 'notes') {
    // parse the data on new value and store to the notes array
    notes = JSON.parse(e.newValue)
    note = notes.find((note) => note.id === noteId)
    // console.log(note)

    if (!note) location.assign('./index.html')

    titleElement.value = note.title
    bodyElement.value = note.body
    dateElement.textContent = generateLastEdited(note.updatedAt)
  }
})
