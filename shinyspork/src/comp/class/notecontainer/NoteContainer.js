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
    const { notes, handleSelect, handleDelete, classes } = this.props;
    return (
      <div className={classes.root}>
      {notes.map(note => (
        <Note
          key={note._id}
          id={ note._id }
          title={note.note_title}
          handleSelect={handleSelect.bind(this, note._id)}
          // handleDelete={handleDelete.bind(this, note._id)}
          handleDelete={ handleDelete }
        />
      ))}
      </div>
    )
  }
}

NoteContainer.propTypes = {
  notes: PropTypes.array.isRequired
}

export default injectSheet(styles)(NoteContainer);
