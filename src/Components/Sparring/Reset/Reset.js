import React from 'react';
import Button from '@material-ui/core/Button';

const reset = (props) => {
  return(
    <Button variant="contained" color="secondary" onClick={props.clickedReset}>RESET</Button>
  );
}

export default reset;
