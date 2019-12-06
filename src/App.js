import React from "react";

import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import ProtectedRoute from "./Components/ProtectedRoute";
import Home from "./Components/Home";
import Forecast from './Components/Forecast'
import Login from './Components/Login'
import Weather from "./Components/Weather";
import Report from './Components/Report'
import Statistics from './Components/Statistics'
import Social from './Components/Social'
import NotFound from './Components/Errors/404'

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Switch>
      <ProtectedRoute
        exact
        path="/"
        component={Home}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <Route path="/login" component={Login} />
      <Route exact path="/forecast" render={() => <Forecast />} />
      <Route exact path="/weather" render={() => <Weather />} />
      <Route exact path="/report" render={() => <Report />} />
      <Route exact path="/statistics" render={() => <Statistics />} />
      <Route exact path="/social" render={() => <Social />} />
      <Route component={NotFound} />
    </Switch>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);