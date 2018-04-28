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
      id: null,
      title: '',
      content: ''
    }
  }
  componentDidMount() {
    fetch('/api/all')
    .then((res) => res.json())
    .then((notes) => this.setState({ notes }))
  }
  handleSelect = (id) => {
    let selectedNote = noteList.find(note => note.id === id)
    this.setState({
      id: id,
      title: selectedNote.title,
      content: selectedNote.content
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
    let { id, title, content } = this.state;
    return (
      <div>
        <button onClick={this.createNote}>New</button>
        <NoteContainer noteList={noteList} handleSelect={this.handleSelect}/>
        <NoteContent title={title} content={content} handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default Demo;
