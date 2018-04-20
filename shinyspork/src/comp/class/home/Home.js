import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  root: {
    '& button': {
      fontWeight: 'bold'
    }    
  },
  button: {
    backgroundColor: 'red'
  },  
}

const Home = ({classes}) => (
  <div className={classes.root}>
    <button className={classes.button}>Click Me</button>
  </div>
)

export default injectSheet(styles)(Home);
