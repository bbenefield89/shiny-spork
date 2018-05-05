import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import NoteEditor from './NoteEditor';

// icons
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSave from '@fortawesome/fontawesome-free-solid/faSave';

const styles = {
  root: {
    width: '100%',
    padding: '1rem 1rem',
    boxShadow: '-1px 0 2px #e2e2e2',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  }, 
  title: {
    fontFamily: 'Roboto',
    fontSize: '1.3rem',
    borderBottom: '1px solid #e2e2e2',
    paddingBottom: '0.5rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  content: {
    paddingTop: '0.5rem',
    flexGrow: 1,
  },
  iconSecondary: {
    padding: '0.5rem',
    fontSize: '0.8rem',
    '&:hover': {
      color: '#2ebd60'
    }
  }
}

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
