import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { NotFound } from './Errors'
import Layout from './Layout/index'
import Forecast from './Forecast'
import Weather from './Weather'
import Login from './Login'
import Report from './Report'
import Social from './Social'
import Statistics from './Statistics'

export default class extends Component {
  state = {
    gustbuddy: []
  }

  render() {
    const { gustbuddy } = this.state

    return <BrowserRouter>
      <Layout gustbuddy={gustbuddy}>
        <Switch>
          <Route exact path="/" render={() => <Login />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/forecast" render={() => <Forecast />} />
          <Route exact path="/weather" render={() => <Weather />} />
          <Route exact path="/report" render={() => <Report />} />
          <Route exact path="/statistics" render={() => <Statistics />} />
          <Route exact path="/social" render={() => <Social />} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  }
}
