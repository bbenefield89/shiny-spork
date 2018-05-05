import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Value } from 'slate';
import Plain from 'slate-plain-serializer';

// components
import NoteContainer from '../notecontainer/NoteContainer.js';
import NoteContent from '../notecontent/NoteContent.js';

const styles = {
  root: {
    padding: '0.5rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'stretch',
  }, 
}

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      _id: null,
      note_title: Plain.deserialize('Note title'),
      note_content: Plain.deserialize('Note Content')
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
      note_title: Value.fromJSON(selectedNote.note_title),
      note_content: Value.fromJSON(selectedNote.note_content)
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

  // handleDelete
  handleDelete = e => {
    const { notes } = this.state;
    const { id }    = e.target.parentNode;
    
    // loop through `this.state.notes`
    for (let note of notes) {
      if (id === note._id) {
        // delete note where the HTML `id` matches `note._id`
        this.updateNote(note._id, 'delete');
      }
    }
  }

  getNotes = () => {
    fetch('/api/all')
    .then((res) => res.json())
    .then((notes) => this.setState({ notes }))
  }

  createNote = () => {
    let newNote = {
      note_title: Plain.deserialize('[New note title]'),
      note_content: Plain.deserialize(''),
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

      return res.json()
      .then(data => {
        // Refresh notes after creating a new note successfully
        this.getNotes()
        // Select the new note, ready for edit
        this.setState({
          _id: data._id,
          note_title: Value.fromJSON(data.note_title),
          note_content: Value.fromJSON(data.note_content)
        })
      })
      
    })
  }
  updateNote = (_id, action) => {
    let req = {
      action: action,
      data: {
        _id,
        note_title: this.state.note_title,
        note_content: this.state.note_content
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
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.toolBar}></div>
        <button onClick={this.createNote}>New</button>
        <NoteContainer notes={notes} handleSelect={this.handleSelect} handleDelete={this.handleDelete}/>
        <NoteContent title={note_title} content={note_content} handleChange={this.handleChange} handleSave={this.handleSave.bind(this, _id)}/>
      </div>
    );
  }
}

export default injectSheet(styles)(Demo);
