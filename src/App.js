import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Market from './components/Market'
import Vehicles from './components/Vehicles'
import MarketDetails from './components/MarketDetails.jsx'
import VehicleDetails from './components/VehicleDetails.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/' component={Market} exact />
          <Route path='/market/details/:id' component={MarketDetails} />
          <Route path='/vehicles' component={Vehicles} exact />
          <Route path='/vehicles/details/:id' component={VehicleDetails} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
