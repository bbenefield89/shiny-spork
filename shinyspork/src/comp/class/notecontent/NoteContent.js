import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import NoteEditor from './NoteEditor';

const styles = {
  root: {
    backgroundColor: 'blue'
  }, 
}

class NoteContent extends Component {
  render() {
    let { title, content, classes } = this.props;
    return (
      <div className={classes.root}>
        <NoteEditor
          value={title}
          type='title'
          handleChange={({ value }) => this.props.handleChange({value}, 'note_title')}
        />
        <h3>Content:</h3>
        <NoteEditor
          value={content}
          type='content'
          handleChange={({ value }) => this.props.handleChange({value}, 'note_content')}
        />
        <button onClick={this.props.handleSave}>Save</button>
      </div>
    )
  }
}

NoteContent.propTypes = {
  title: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired
}

export default injectSheet(styles)(NoteContent);
