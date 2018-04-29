import React, { Component } from 'react';
import { Value } from 'slate';
import Plain from 'slate-plain-serializer';

// components
import NoteContainer from '../notecontainer/NoteContainer.js';
import NoteContent from '../notecontent/NoteContent.js';

// Initial note content, blank text
const existingNoteValue = localStorage.getItem('content')
const initialNoteContent = Plain.deserialize(
  existingNoteValue || 'A line of text in a paragraph.'
)

const existingTitleValue = localStorage.getItem('title')
const initialNoteTitle = Plain.deserialize(
  existingTitleValue || 'A line of text in a paragraph.'
)

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      _id: null,
      note_title: initialNoteTitle,
      note_content: initialNoteContent
    }
    this.createNote = this.createNote.bind(this)
  }
  componentDidMount() {
    this.getNotes()
  }
  
  handleSelect = (_id) => {
    let selectedNote = this.state.notes.find(note => note._id === _id)
    this.setState({
      _id,
      note_title: Plain.deserialize(selectedNote.note_title),
      note_content: Plain.deserialize(selectedNote.note_content)
    })
  }

  handleChange = ({value}, inputType) => {
    this.setState({
      [inputType]: value
    })
  }

  handleSave = (_id) => {
    this.updateNote(_id, 'save')
  }

  handleDelete = (_id) => {
    this.updateNote(_id, 'delete')
  }

  getNotes = () => {
    fetch('/api/all')
    .then((res) => res.json())
    .then((notes) => this.setState({ notes }))
  }

  createNote = () => {
    let newNote = {
      note_title: '[New note title]',
      note_content: '',
    }

    fetch('/api/new', { 
      method: 'POST', 
      body: JSON.stringify(newNote),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      if (!res.ok) {
        return res.json()
        .then(error => console.log(error.message))//to-do: alert user with error message
      }
      // Refresh notes after creating a new note successfully
      this.getNotes()
      // Select the new note, ready for edit
      this.setState({
        note_title: Plain.deserialize(newNote.note_title),
        note_content: Plain.deserialize(newNote.note_content)
      })
    })
  }
  updateNote = (_id, action) => {
    let req = {
      action: action,
      data: {
        _id: _id,
        note_title: Plain.serialize(this.state.note_title),
        note_content: Plain.serialize(this.state.note_content)
      } 
    }
    fetch(`/api/note`, { 
      method: 'POST', 
      body: JSON.stringify(req),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      if (!res.ok) {
        return res.json()
        .then(error => console.log(error.message))//to-do: alert user with error message
      }
      // Refresh notes after saving/deleting a note successfully
      this.getNotes()
    })
  }
  render() {
    let { notes, _id, note_title, note_content } = this.state;
    return (
      <div>
        <button onClick={this.createNote}>New</button>
        <NoteContainer notes={notes} handleSelect={this.handleSelect} handleDelete={this.handleDelete}/>
        <NoteContent title={note_title} content={note_content} handleChange={this.handleChange} handleSave={this.handleSave.bind(this, _id)}/>
      </div>
    );
  }
}

export default Demo;
