import React, { Component } from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';

import Poomsae from './Components/Poomsae/Poomsae';
import Sparring from './Components/Sparring/Sparring';
import Error from './Components/Error';

import initReactFastClick from 'react-fastclick';
initReactFastClick();

class App extends Component {
  render() {
    return (
      
      <HashRouter>
        <div>
          <Switch>
            <Route path="/poomsae-score/" exact component={Poomsae} />
            <Route path="/poomsae-score/sparring" exact component={Sparring} />
            <Route path="/" component={Poomsae} />
            <Route component={Error} />
          </Switch> 
        </div>
      </HashRouter>
    );
  }
}

export default App;
