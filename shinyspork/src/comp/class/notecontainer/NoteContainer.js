import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

class NoteContainer extends Component {
  render() {
    const noteList = this.props.noteList;
    console.log(this.props.noteList);
    return (
      <React.Fragment>
        noteList.map((note) => (
          <Note note={note}/>
        ))
      </React.Fragment>
    )
  }
}

NoteContainer.propTypes = {
  noteList: PropTypes.array.isRequired
}

export default NoteContainer;
