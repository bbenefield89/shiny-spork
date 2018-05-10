import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import NoteEditor from './NoteEditor';

// icons
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSave from '@fortawesome/fontawesome-free-solid/faSave';

// styles
import styles from './styles/notecontent';

class NoteContent extends Component {
  render() {
    let { title, content, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.title}>
          <NoteEditor
            value={title}
            type='title'
            handleChange={({ value }) => this.props.handleChange({value}, 'note_title')}
          />
          <div className={classes.iconSecondary}>
            <FontAwesomeIcon icon={faSave} onClick={this.props.handleSave} />
          </div>
        </div>
        <div className={classes.content}>
          <NoteEditor
            value={content}
            type='content'
            handleChange={({ value }) => this.props.handleChange({value}, 'note_content')}
          />
        </div>
      </div>
    )
  }
}

NoteContent.propTypes = {
  title: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired
}

export default injectSheet(styles)(NoteContent);
