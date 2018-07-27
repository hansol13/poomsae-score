import React from 'react';

import Button from '@material-ui/core/Button';
import classes from './Headshot.css';

const Headshot = (props) => {
    return (
        <div className={classes.Headshot} >
            <Button 
                variant="outlined" 
                color="default"
                onClick={props.clickedHeadshot} >HEADSHOT +3</Button>
        </div>
        
    );
}

export default Headshot;