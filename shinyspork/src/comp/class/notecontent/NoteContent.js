import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

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
        <h3>Title: {title}</h3>
        <h3>Content:</h3>
        <p>{content}</p>
        <button>Save</button>
      </div>
    )
  }
}

NoteContent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default injectSheet(styles)(NoteContent);
