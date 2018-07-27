import React from 'react';

import Button from '@material-ui/core/Button';
import classes from './Bodyshot.css';

const bodyshot = (props) => {
    return (
        <div className={classes.Bodyshot}>
            <Button 
                variant="outlined" 
                color="default"
                onClick={props.clickedBodyshot} >BODYSHOT +2</Button>
        </div>
        
    );
}

export default bodyshot;