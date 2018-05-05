import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import { Editor } from 'slate-react';

const styles = {
  root: {
    backgroundColor: 'blue'
  }, 
}

function MarkHotkey(options) {
  const { type, key } = options
  // Return our "plugin" object, containing the `onKeyDown` handler.
  return {
    onKeyDown(event, change) {
      // Check that the key pressed matches our `key` option.
      if (!event.ctrlKey || event.key !== key) return;
      // Prevent the default characters from being inserted.
      event.preventDefault()
      // Toggle the mark `type`.
      change.toggleMark(type)
      return true
    },
  }
}

// Initialize a plugin for each mark...
const plugins = [
  MarkHotkey({ key: 'b', type: 'bold' }),
  MarkHotkey({ key: '`', type: 'code' }),
  MarkHotkey({ key: 'i', type: 'italic' }),
  MarkHotkey({ key: '~', type: 'strikethrough' }),
  MarkHotkey({ key: 'u', type: 'underline' }),
]

class NoteEditor extends Component {
  onChange = ({ value }) => {
    this.props.handleChange({ value })
  }
  // Add a `renderMark` method to render marks.
  renderMark = props => {
    switch (props.mark.type) {
      case 'bold':
        return <strong>{props.children}</strong>
      case 'code':
        return <code>{props.children}</code>
      case 'italic':
        return <em>{props.children}</em>
      case 'strikethrough':
        return <del>{props.children}</del>
      case 'underline':
        return <u>{props.children}</u>
    }
  }
  render() {
    let { classes, value } = this.props;
    return (
      <div className={classes.root}>
        <Editor 
          plugins={plugins}
          value={value} 
          onChange={this.onChange}
          renderMark={this.renderMark}
        />
      </div>
    )
  }
}

NoteEditor.propTypes = {
  value: PropTypes.object.isRequired,
}

export default injectSheet(styles)(NoteEditor);
