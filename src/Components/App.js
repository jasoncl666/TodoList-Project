import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Home from '../Pages/Home'
import Detail from './Detail'
import CreateGroup from '../Pages/CreateGroup'


const App = () => (
  <Router>
      <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/detail">
              <Detail />
          </Route>
          <Route exact path="/create">
              <CreateGroup />
          </Route>
      </Switch>
  </Router>
  
)


export default App