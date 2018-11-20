import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import ScoreDisplay from './ScoreDisplay/ScoreDisplay';
import Button from '@material-ui/core/Button';

import classes from './Poomsae.css';

class Poomsae extends Component {
  state = {
    technicalScore: 4.00,
    performanceScore: 6.00,
  }

  minorTechDeductionHandler = (event) => {
    let newScore = this.state.technicalScore - 0.1;
    if(newScore<0){return;}
    this.setState({technicalScore: newScore} );
  }

  majorTechDeductionHandler = (event) => {
    let newScore = this.state.technicalScore - 0.3;
    if(newScore<0){return;}
    this.setState({technicalScore: newScore} );

  }

  minorPerfDeductionHandler = (event) => {
    let newScore = this.state.performanceScore- 0.1;
    if(newScore<0){return;}
    this.setState({performanceScore: newScore} );
  }

  majorPerfDeductionHandler = (event) => {
    let newScore = this.state.performanceScore - 0.3;
    if(newScore<0){return;}
    this.setState({performanceScore: newScore} );
  }

  resetHandler =(event) => {
    this.setState({
      technicalScore: 4.00,
      performanceScore: 6.00
    })
  }

  render() {
    return (
      <div className={classes.Poomsae} >
        
        <ScoreDisplay
          technicalScore={this.state.technicalScore}
          performanceScore={this.state.performanceScore}
          clickedTechMinor={this.minorTechDeductionHandler}
          clickedTechMajor={this.majorTechDeductionHandler}
          clickedPerfMinor={this.minorPerfDeductionHandler}
          clickedPerfMajor={this.majorPerfDeductionHandler} />

        <div className = {classes.center}>
          <Button variant="contained" color="secondary" onClick={this.resetHandler} >RESET</Button>
          <br/><br/>
          <NavLink to="/poomsae-score/sparring">
            <Button variant="contained" color="default">SPARRING SCOREBOARD</Button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Poomsae;
