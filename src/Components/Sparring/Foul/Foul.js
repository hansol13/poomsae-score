import React from 'react';

import Button from '@material-ui/core/Button';
import classes from './Foul.css';

const foul = (props) => {
  return (
    <div className={classes.Foul} >
      <Button 
        variant="outlined"
        color="secondary"
        onClick={props.clickedFoul} >FOUL -1</Button>
    </div>
      
  );
}

export default foul;