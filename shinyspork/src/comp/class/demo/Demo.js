import React, { Component } from 'react';
import { Value } from 'slate';

// components
import NoteContainer from '../notecontainer/NoteContainer.js';
import NoteContent from '../notecontent/NoteContent.js';

// Initial note content, blank text
const existingNoteValue = JSON.parse(localStorage.getItem('content'))
const initialNoteContent = Value.fromJSON(
  existingNoteValue || {
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'A line of text in a paragraph.',
              },
            ],
          },
        ],
      },
    ],
  },
})

const existingTitleValue = JSON.parse(localStorage.getItem('title'))
const initialNoteTitle = Value.fromJSON(
  existingTitleValue || {
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'A line of text in a paragraph.',
              },
            ],
          },
        ],
      },
    ],
  },
})

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
  getNotes = () => {
    fetch('/api/all')
    .then((res) => res.json())
    .then((notes) => this.setState({ notes }))
  }
  handleSelect = (_id) => {
    let selectedNote = this.state.notes.find(note => note._id === _id)
    this.setState({
      _id,
      note_title: selectedNote.note_title,
      note_content: selectedNote.note_content
    })
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
        note_title: '[New note title]',
        note_content: ''
      })
    })

    
  }
  handleChange = ({value}, inputType) => {
    this.setState({
      [inputType]: value
    })
  }
  render() {
    let { notes, _id, note_title, note_content } = this.state;
    return (
      <div>
        <button onClick={this.createNote}>New</button>
        <NoteContainer notes={notes} handleSelect={this.handleSelect}/>
        <NoteContent title={note_title} content={note_content} handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default Demo;
