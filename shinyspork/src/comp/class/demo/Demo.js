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
      title: '',
      content: ''
    }
  }
  handleSelect = (id) => {
    let selectedNote = noteList.find(note => note.id === id)
    this.setState({
      title: selectedNote.title,
      content: selectedNote.content
    })
  }
  render() {
    let { title, content } = this.state;
    return (
      <div>
        <NoteContainer noteList={noteList} handleSelect={this.handleSelect}/>
        <NoteContent title={title} content={content} />
      </div>
    );
  }
}

export default Demo;
