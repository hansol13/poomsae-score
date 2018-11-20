import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import ScoreDisplay from './ScoreDisplay/ScoreDisplay';
import Button from '@material-ui/core/Button';

import classes from './Poomsae.css';

class Poomsae extends Component {
  state = {
    technicalScore: 4.00,
    technicalMinorCount: 0,
    technicalMajorCount: 0,
    performanceScore: 6.00,
    performanceMinorCount: 0,
    performanceMajorCount: 0,
  }

  minorTechDeductionHandler = (event) => {
    let newScore = this.state.technicalScore - 0.1;
    let minorCount = this.state.technicalMinorCount + 1;
    if(newScore<0){return;}
    this.setState({
      technicalScore: newScore, 
      technicalMinorCount: minorCount} 
      );
  }

  majorTechDeductionHandler = (event) => {
    let newScore = this.state.technicalScore - 0.3;
    let majorCount = this.state.technicalMajorCount + 1;
    if(newScore<0){return;}
    this.setState({
      technicalScore: newScore, 
      technicalMajorCount: majorCount} 
      );

  }

  minorPerfDeductionHandler = (event) => {
    let newScore = this.state.performanceScore- 0.1;
    let minorCount = this.state.performanceMinorCount + 1;
    if(newScore<0){return;}
    this.setState({
      performanceScore: newScore, 
      performanceMinorCount: minorCount} 
      );
  }

  majorPerfDeductionHandler = (event) => {
    let newScore = this.state.performanceScore - 0.3;
    let majorCount = this.state.performanceMajorCount + 1;
    if(newScore<0){return;}
    this.setState({
      performanceScore: newScore, 
      performanceMajorCount: majorCount} 
      );
  }

  resetHandler =(event) => {
    this.setState({
      technicalScore: 4.00,
      performanceScore: 6.00,
      technicalMajorCount: 0,
      technicalMinorCount: 0,
      performanceMajorCount: 0,
      performanceMinorCount: 0,
    })
  }

  render() {
    return (
      <div className={classes.Poomsae} >
        
        <ScoreDisplay
          technicalScore={this.state.technicalScore}
          performanceScore={this.state.performanceScore}

          technicalMinorCount={this.state.technicalMinorCount}
          technicalMajorCount={this.state.technicalMajorCount}
          performanceMinorCount={this.state.performanceMinorCount}
          performanceMajorCount={this.state.performanceMajorCount} 

          clickedTechMinor={this.minorTechDeductionHandler}
          clickedTechMajor={this.majorTechDeductionHandler}
          clickedPerfMinor={this.minorPerfDeductionHandler}
          clickedPerfMajor={this.majorPerfDeductionHandler}
          />
          

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
