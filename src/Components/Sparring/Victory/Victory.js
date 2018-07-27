import React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const victory = (props) => (
    <Button variant="contained" color="default" onClick={props.clickedVictory} >
      <Typography variant="title">DECLARE WINNER</Typography>
    </Button>
);

export default victory;