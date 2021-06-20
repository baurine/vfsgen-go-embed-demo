import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import AntdPage from './pages/AntdPage'

// import 'antd/dist/antd.less'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/antd">
          <AntdPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
