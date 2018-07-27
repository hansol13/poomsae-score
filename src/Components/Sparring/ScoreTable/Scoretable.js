import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Foul from '../Foul/Foul';
import Headshot from '../Headshot/Headshot';
import Bodyshot from '../Bodyshot/Bodyshot';
import Bonus from '../Bonus/Bonus';

import classes from './Scoretable.css';

const scoretable = (props) => {
  return(
    <div className={classes.Scoretable}>
    
    <Grid container spacing={16}>
      <Grid item xs={4}>
        <Paper >
          <div className={classes.bluebackground} >
            <h2 className={classes.blue}>BLUE</h2>
            <Headshot clickedHeadshot={props.blueClickedHeadshot}/>
            <Bodyshot clickedBodyshot={props.blueClickedBodyshot} />
            <Bonus clickedBonus={props.blueClickedBonus} />
            <Foul clickedFoul={props.blueClickedFoul} />
          </div> 
        </Paper>
      </Grid>

      <Grid item xs={4}>
      <br/><br/><br/><br/><br/>
        <Paper>
          <h2 className={classes.blueScore}>{props.blueScore}</h2>
          <h2> : </h2>
          <h2 className={classes.redScore}>{props.redScore}</h2>
        </Paper>
        
      </Grid>
      
      <Grid item xs={4}>
        <Paper>
        <div className={classes.redbackground} >
          <h2 className={classes.red}>RED</h2>
          <Headshot clickedHeadshot={props.redClickedHeadshot}/>
          <Bodyshot clickedBodyshot={props.redClickedBodyshot} />
          <Bonus clickedBonus={props.redClickedBonus} />
          <Foul clickedFoul={props.redClickedFoul} />
        </div>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <table align="center" width="75%"  >
          <tbody>
            <tr>
              <th>HEAD</th>
              <th>BODY</th>
              <th>BONUS</th>
              <th>FOULS</th>
            </tr>
            
            <tr>
              <td><h3 className={classes.blueScore}>{props.blueInfo.headshot}</h3></td>
              <td><h3 className={classes.blueScore}>{props.blueInfo.bodyshot}</h3></td>
              <td><h3 className={classes.blueScore}>{props.blueInfo.bonus}</h3></td>
              <td><h3 className={classes.blueScore}>{props.blueInfo.foul}</h3></td>
            </tr>
            <tr>
              <td><h3 className={classes.redScore}>{props.redInfo.headshot}</h3></td>
              <td><h3 className={classes.redScore}>{props.redInfo.bodyshot}</h3></td>
              <td><h3 className={classes.redScore}>{props.redInfo.bonus}</h3></td>
              <td><h3 className={classes.redScore}>{props.redInfo.foul}</h3></td>
            </tr>
          </tbody>
        </table>
      </Grid>
    </Grid>
    <br/>


    </div>
  );
}

export default scoretable;
