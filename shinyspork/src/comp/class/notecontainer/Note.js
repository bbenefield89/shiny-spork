import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Value } from 'slate';
import Plain from 'slate-plain-serializer';

//icons
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTrash from '@fortawesome/fontawesome-free-solid/faTrashAlt';

import styles from './styles/note';

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
