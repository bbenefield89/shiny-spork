import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  root: {
    backgroundColor: 'blue'
  }, 
}

class NoteContent extends Component {
  handleChange = (input) => {
    this.props.handleChange(input)
  }
  render() {
    let { title, content, classes } = this.props;
    return (
      <div className={classes.root}>
        <form>
          <input name='title' type='text' value={title} onChange={this.handleChange.bind(this, this.refs.inputTitle)} ref="inputTitle" />
          <h3>Content:</h3>
          <input name='content' type='text' value={content} onChange={this.handleChange.bind(this, this.refs.inputContent)} ref="inputContent" />
          
        </form>
      </div>
    )
  }
}

NoteContent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default injectSheet(styles)(NoteContent);
