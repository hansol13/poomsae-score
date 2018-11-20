import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Poomsae from './Components/Poomsae/Poomsae';
import Sparring from './Components/Sparring/Sparring';
import Error from './Components/Error';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/poomsae-score/" exact component={Poomsae} />
            <Route path="/poomsae-score/sparring" exact component={Sparring} />
            <Route path="/" component={Poomsae} />
            <Route component={Error} />
          </Switch> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
