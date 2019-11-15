import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { NotFound } from './Errors'
import Layout from './Layout/index'
import Forecast from './Forecast'
import Weather from './Weather'
import Login from './Login'

export default class extends Component {
  state = {
    writers: []
  }

  async componentDidMount() {
    const writers = await (await fetch('http://localhost:3004/writers?_embed=texts')).json()

    this.setState({ writers })
  }

  render() {
    const { writers } = this.state

    return <BrowserRouter>
      <Layout writers={writers}>
        <Switch>
          <Route exact path="/" render={() => <Login />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/forecast" render={() => <Forecast />} />
          <Route exact path="/weather" render={() => <Weather />} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  }
}
