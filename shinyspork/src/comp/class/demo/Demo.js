import React, { Component } from 'react';

// components
import NoteContainer from '../notecontainer/NoteContainer.js';
import NoteContent from '../notecontent/NoteContent.js';

// noteList json
const noteList = require('../../noteList.js');

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      _id: null,
      note_title: '',
      note_content: ''
    }
  }
  componentDidMount() {
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
  createNote = (e) => {
    e.preventDefault();
    this.setState({
      id: noteList.length,
      title: '[New note title]',
      content: 'Your awesome note here'
    })
  }
  handleChange = (input) => {
    this.setState({
      [input.name]: input.value
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
