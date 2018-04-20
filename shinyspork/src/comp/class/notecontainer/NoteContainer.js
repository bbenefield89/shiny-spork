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
    const { noteList } = this.props;
    return (
      noteList.map(note => (
        <Note key={note.id} note={note}/>
      ))
    )
  }
}

NoteContainer.propTypes = {
  noteList: PropTypes.array.isRequired
}

export default injectSheet(styles)(NoteContainer);
