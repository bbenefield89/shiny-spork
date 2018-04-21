import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  root: {
    backgroundColor: 'red'
  }, 
}

const Note = (props) => {
  let { classes, handleClick } = props;
  let { title } = props.note;
  return (
    <div className={classes.root} onClick={handleClick}>
      {title}
    </div>
  )
}
Note.propTypes = {
  note: PropTypes.object.isRequired
}

export default injectSheet(styles)(Note);
