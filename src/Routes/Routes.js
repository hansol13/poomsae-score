import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Poomsae from '../Components/Poomsae/Poomsae';

export default () => {
  (<BrowserRouter>
    <Route path="/poomsae" exact render = {()=> <Poomsae/> }/>
  </BrowserRouter>);
};