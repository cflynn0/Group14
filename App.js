import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Forecast from './Forecast';
import mainPage from './mainPage';
import Dashboard from './Dashboard';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/forecast' component={Forecast}/>
        <Route path='/weather' component={mainPage}/>
        <Route path='/' component={Dashboard}/>
      </Switch>
    </div>
  );
}

export default App;