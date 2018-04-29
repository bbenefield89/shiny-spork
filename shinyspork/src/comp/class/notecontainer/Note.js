import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  root: {
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row'
  }, 
}

const Note = (props) => {
  let { classes, handleClick, handleDelete } = props;
  let { title } = props;
  return (
    <div className={classes.root}>
      <div onClick={handleClick}>{title}</div>
      <div onClick={handleDelete}>X</div>
    </div>
  )
}
Note.propTypes = {
  title: PropTypes.string.isRequired
}

export default injectSheet(styles)(Note);
