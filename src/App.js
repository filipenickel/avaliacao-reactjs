import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {Provider} from 'react-redux'
import Home from './Pages/Home'
import FormLogin from './Components/FormLogin'
import {Store} from './store'

export default class App extends Component {
render(){
return(
  <Provider store={Store}>
  <BrowserRouter>
  <Switch>
     < Route path="/" exact={true} component={FormLogin} />
<Route path="/home" component={Home} />

  </Switch>
</ BrowserRouter>
</Provider>
)}}
