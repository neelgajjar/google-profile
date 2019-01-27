import React from 'react';
import classes from './SearchBar.css';

const searchBar = (props) => (
  <form className={classes.SearchBar} onSubmit={props.submited}>
    <input className={classes.SearchInput} type="text" placeholder="Who are you looking for?" onChange={props.changed} />
    <input className={classes.SearchSubmit} type="submit" value="Search" />
  </form>
);

export default searchBar;