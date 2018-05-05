import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Value } from 'slate';
import Plain from 'slate-plain-serializer';

//icons
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTrash from '@fortawesome/fontawesome-free-solid/faTrashAlt';

const styles = {
  root: {
    backgroundColor: 'white',
    marginBottom: '0.1rem',
    padding: '0.5rem',
    boxShadow: '0 1px 8px 2px #e2e2e2',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  }, 
  title: {
    fontFamily: 'Roboto',
  },
  icon: {
    color: '#e2e2e2',
    fontSize: '0.7rem',
    '&:hover': {
      color: 'red',
    }
  }
}

const Note = (props) => {
  let { classes, handleSelect, handleDelete, id } = props;
  let { title } = props;
  return (
    <div className={classes.root}>
      <div className={classes.title} onClick={handleSelect}>{Plain.serialize(Value.fromJSON(title))}</div>
      <div className={classes.icon}>
        <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(id)} />
      </div>
    </div>
  )
}
Note.propTypes = {
  // title: PropTypes.string.isRequired
}

export default injectSheet(styles)(Note);
