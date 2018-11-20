import React from 'react';
import MajorDeduction from '../MajorDeduction/MajorDeduction';
import MinorDeduction from '../MinorDeduction/MinorDeduction';
import BreakdownTable from './BreakdownTable/BreakdownTable';
import classes from './ScoreDisplay.css';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const scoreDisplay = (props) => {
  let score = props.technicalScore + props.performanceScore;
  return (
    <div className={classes.ScoreDisplay}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography variant="display1">POOMSAE SCOREBOARD</Typography>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <Typography variant="title"><br/>TECHNICAL<br/></Typography>
            <Typography variant="display1">{props.technicalScore.toFixed(2)}</Typography>
            <MajorDeduction clickedMajorScore={props.clickedTechMajor} />
            <MinorDeduction clickedMinorScore={props.clickedTechMinor} />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper>
            <Typography variant="title"><br/>PRESENTATION<br/></Typography>
            <Typography variant="display1">{props.performanceScore.toFixed(2)}</Typography>
            <MajorDeduction clickedMajorScore={props.clickedPerfMajor} />
            <MinorDeduction clickedMinorScore={props.clickedPerfMinor} />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper>
            <br/>
            <Typography variant="title">OVERALL SCORE<br/></Typography>
            <Typography variant="display2"><strong>{score.toFixed(2)}</strong></Typography>
            <br/>
            
          </Paper>
          <br/>
          <BreakdownTable 
              techMinor = {props.technicalMinorCount}
              techMajor = {props.technicalMajorCount}
              perfMinor = {props.performanceMinorCount}
              perfMajor = {props.performanceMajorCount}
            />
        </Grid>
      </Grid>
      <br/>  
    </div>
  );
};

export default scoreDisplay;