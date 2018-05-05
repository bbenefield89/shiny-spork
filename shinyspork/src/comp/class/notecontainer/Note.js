import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Value } from 'slate';
import Plain from 'slate-plain-serializer';

const styles = {
  root: {
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row'
  }, 
}

const Note = (props) => {
  let { classes, handleSelect, handleDelete, id } = props;
  let { title } = props;
  return (
    <div className={classes.root} id={ id }>
      <div onClick={handleSelect}>{Plain.serialize(Value.fromJSON(title))}</div>
      <div onClick={handleDelete}>X</div>
    </div>
  )
}
Note.propTypes = {
  // title: PropTypes.string.isRequired
}

export default injectSheet(styles)(Note);
