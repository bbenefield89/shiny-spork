import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

// Components
import Note from './Note';

const styles = {
  root: {
    backgroundColor: 'green'
  }, 
}

class NoteContainer extends Component {
  render() {
    const { notes } = this.props;
    return (
      notes.map(note => (
        <Note key={note._id} title={note.note_title} handleClick={this.props.handleSelect.bind(this, note._id)}/>
      ))
    )
  }
}

NoteContainer.propTypes = {
  notes: PropTypes.array.isRequired
}

export default injectSheet(styles)(NoteContainer);
