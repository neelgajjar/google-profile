import React from 'react';

import SelectOption from '../UI/SelectOption/SelectOption';
import classes from './SortUsers.css';

const sortUsers = (props) => {
  let options = props.sortOptions;
  
  options = options.map((option) => {
    return <SelectOption key={'count' + option} value={option} />
  });

  return(
    <div className={classes.Sort}>
      <label className={classes.SortLabel}>Sort by:</label>
      <select className={classes.SortSelect} onChange={props.sort} disabled={props.disabled}>
        {options}
      </select>
    </div>  
  )
};

export default sortUsers;