import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Value } from 'slate';
import Plain from 'slate-plain-serializer';

// Components
import Note from './Note';

const styles = {
  root: {
    backgroundColor: 'green'
  }, 
}

class NoteContainer extends Component {
  render() {
    const { notes, handleSelect, handleDelete } = this.props;
    console.log(notes)
    return (
      notes.map(note => (
        <Note key={note._id} title={note.note_title} handleSelect={handleSelect.bind(this, note._id)} handleDelete={handleDelete.bind(this, note._id)}/>
      ))
    )
  }
}

NoteContainer.propTypes = {
  notes: PropTypes.array.isRequired
}

export default injectSheet(styles)(NoteContainer);
