import React, { Component } from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

const Home = ({classes}) => (
  <div className={classes.root}>
    <button className={classes.button}>Click Me</button>
  </div>
)

export default injectSheet(styles)(Home);
