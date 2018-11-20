import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import Scoretable from './ScoreTable/Scoretable';
import Reset from './Reset/Reset';

import classes from './Sparring.css';

class Sparring extends Component{

  state = {
    blue: {
      headshot:0,
      bodyshot:0,
      foul:0,
      bonus:0,
    },
    red: {
      headshot:0,
      bodyshot:0,
      foul:0,
      bonus:0,
    },
  }

  // blue handlers
  blueHeadshotHandler = (event) => {
    let newScore = {...this.state.blue};
    newScore.headshot = newScore.headshot+1;
    this.setState({blue:newScore});
    // console.log(this.state);
  }
  blueBodyshotHandler = (event) => {
    let newScore = {...this.state.blue};
    newScore.bodyshot = newScore.bodyshot+1;
    this.setState({blue:newScore});
    // console.log(this.state);
  }
  blueBonusHandler = (event) => {
    let newScore = {...this.state.blue};
    newScore.bonus = newScore.bonus+1;
    this.setState({blue:newScore});
    // console.log(this.state);
  }
  blueFoulHandler = (event) => {
    let newScore = {...this.state.blue};
    newScore.foul = newScore.foul+1;
    this.setState({blue:newScore});
    // console.log(this.state);
  }

  // red handlers
  redHeadshotHandler = (event) => {
    let newScore = {...this.state.red};
    newScore.headshot = newScore.headshot+1;
    this.setState({red:newScore});
    // console.log("headshot" + this.state);
  }
  redBodyshotHandler = (event) => {
    let newScore = {...this.state.red};
    newScore.bodyshot = newScore.bodyshot+1;
    this.setState({red:newScore});
    // console.log("bodyshot" + this.state);
  }
  redBonusHandler = (event) => {
    let newScore = {...this.state.red};
    newScore.bonus = newScore.bonus+1;
    this.setState({red:newScore});
    // console.log("bonus" + this.state);
  }
  redFoulHandler = (event) => {
    let newScore = {...this.state.red};
    newScore.foul = newScore.foul+1;
    this.setState({red:newScore});
    // console.log("foul" + this.state);
  }

  // RESET HANDLER
  resetHandler = (event) => {
    let resetState = {
      headshot:0,
      bodyshot:0,
      foul:0,
      bonus:0
    };
    this.setState({blue : resetState});
    this.setState({red : resetState});
    // console.log("reset sparring" + this.state);
  }

  render() {
    let blueScore = this.state.blue.bonus + this.state.blue.bodyshot*2 + this.state.blue.headshot*3 + this.state.red.foul;
    let redScore = this.state.red.bonus + this.state.red.bodyshot*2 + this.state.red.headshot*3 + this.state.blue.foul;
  
    return (
      <div className={classes.Sparring} >
        
        <Typography variant="display1">SPARRING SCOREBOARD</Typography>
        <Scoretable
          blueClickedHeadshot  = {this.blueHeadshotHandler}
          blueClickedBodyshot = {this.blueBodyshotHandler}
          blueClickedBonus = {this.blueBonusHandler}
          blueClickedFoul = {this.blueFoulHandler}
          redClickedHeadshot = {this.redHeadshotHandler}
          redClickedBodyshot = {this.redBodyshotHandler}
          redClickedBonus = {this.redBonusHandler}
          redClickedFoul = {this.redFoulHandler}
          blueScore = {blueScore}
          redScore = {redScore}
          blueInfo = {this.state.blue}
          redInfo = {this.state.red}
          currentState={this.state}
           />
        
        <div className = {classes.center}>
          <Reset clickedReset={this.resetHandler} />
          <br/><br/>
          <NavLink to="/poomsae-score">
            <Button variant="contained" color="default">POOMSAE SCOREBOARD</Button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Sparring;