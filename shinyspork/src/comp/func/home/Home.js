import React, { Component } from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

const showButtons = true;
const navLinks = [
  { 
    name: 'Demo',
    url : '/demo',
  },{
    name: 'Log in',
    url : '#'
  },{
    name: 'Sign up',
    url : '#'
  },{
    name: 'Log out',
    url : '#'
  }
];

const Home = ({classes}) => (
  <div className={classes.root}>
    <header className={classes.nav_header}>
      <h1>Shiny Spork</h1>

      <nav className={ classes.nav_header__nav }>
        {
          /*
          ** conditional
          ** if `showButtons` === true
          */
          (showButtons) ? (
            <ul className={ classes.nav_header__nav__list }>
              {
                // map through `navLinks`
                navLinks.map(link => {
                  return (
                    <li className={ classes.nav_header__nav__list__item }>
                      <a href={ link.url }>{ link.name }</a>
                    </li>
                )})
              }
            </ul>
            ) : (
            // else only render `Demo`
            <ul>
              <li><a href="/demo">Demo</a></li>
            </ul>
            )
        }
      </nav>
    </header>
  </div>
)

export default injectSheet(styles)(Home);
