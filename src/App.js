import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom'
import './App.css';

import Github from './Github'
import Quote from './Quote'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-headings">
            <h3>Ain't no party like an</h3>
            <h1>API Party</h1>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to='/github'>Github API</NavLink>
            </li>
            <li>
              <NavLink to='/quote'>Ron Swanson API</NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path='/github' component={Github} />
          <Route path='/quote' component={Quote} />
          <Route render={() => <p>To get started, click one of the links above</p>} />
        </Switch>
      </div>
    );
  }
}
export default App;

