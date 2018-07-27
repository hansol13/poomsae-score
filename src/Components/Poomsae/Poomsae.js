import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import ScoreDisplay from './ScoreDisplay/ScoreDisplay';
import Button from '@material-ui/core/Button';
import axios from '../../axios-instance';

import classes from './Poomsae.css';

class Poomsae extends Component {
  state = {
    name: '',
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
      competitor: '',
      technicalScore: 4.00,
      performanceScore: 6.00
    })
  }

  storageHandler = () => {
    const storageState = {...this.state}
    axios.post('/poomsaescores.json', storageState)
    .then(response => {
      console.log('[firebase updated]');
      console.log(response);
      alert('Posted to Firebase!');
    } )
    .catch(error=> {
      console.log('[firebase NOT updated');
      alert('UPDATE NOT SUCCESSFUL');
    } );
  }

  nameHandler = (event) => {this.setState({name:event.target.value});}

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
          <div>
            <label>
              Name: 
              <input type="text" value={this.state.name} onChange={this.nameHandler} />
            </label>
            <input type="submit" value="ENTER"/><br/>
          </div>
          <Button variant="contained" color="secondary" onClick={this.resetHandler} >RESET</Button>
          <Button variant="contained" color="primary" onClick={this.storageHandler}>SAVE DATA</Button><br/><br/>
          <NavLink to="/poomsae-score/sparring">
            <Button variant="contained" color="default">SPARRING SCOREBOARD</Button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Poomsae;
