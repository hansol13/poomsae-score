import React from 'react';
import classes from './MinorDeduction.css';
import Button from '@material-ui/core/Button';

const minorDeduction = (props) => {
    return (
        <div className={classes.MinorDeduction} >
            <Button variant="contained" color="primary" onClick={props.clickedMinorScore}>MINOR DEDUCTION -0.1</Button>
        </div>
    )
};

export default minorDeduction;
