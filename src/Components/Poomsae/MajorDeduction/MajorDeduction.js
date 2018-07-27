import React from 'react';
import classes from './MajorDeduction.css';
import Button from '@material-ui/core/Button';

const majorDeduction = (props) => {
    return (
        <div className={classes.MajorDeduction} >
            <Button variant="contained" color="secondary" onClick={props.clickedMajorScore}>
              MAJOR DEDUCTION -0.3
            </Button>
        </div>
    )
};

export default majorDeduction;
