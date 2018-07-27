import React from 'react';

import Button from '@material-ui/core/Button';
import classes from './Bonus.css';

const bonus = (props) => {
    return (
        <div className={classes.Bonus}>
            <Button 
                variant="outlined" 
                color="default"
                onClick={props.clickedBonus} >BONUS +1</Button>
        </div>
    );
}

export default bonus;