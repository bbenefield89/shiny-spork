import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Value } from 'slate';
import Plain from 'slate-plain-serializer';

const styles = {
  root: {
  }, 
}

const Note = (props) => {
  let { classes, handleSelect, handleDelete } = props;
  let { title } = props;
  return (
    <div className={classes.root}>
      <div onClick={handleSelect}>{Plain.serialize(Value.fromJSON(title))}</div>
      <div onClick={handleDelete}>X</div>
    </div>
  )
}
Note.propTypes = {
  // title: PropTypes.string.isRequired
}

export default injectSheet(styles)(Note);
