import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Test } from './components/Test';
import { Home } from './components/home/home.component';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/">
              <Home/>
            </Route>
            <Route path="/login/oauth2/code/google">
              <Test/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
