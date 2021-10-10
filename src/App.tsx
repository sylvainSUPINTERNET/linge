import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './components/home/home.component';
import { Compte } from './components/compte/compte.component';
import { GuardRoute } from './components/guard/Guard.component';
import { Authenticate } from './components/authenticate/authenticate.component';

function App() {
  return (
    <div className="App">
      <Router>
        <div>

          <nav style={{display:"flex", justifyContent:"center"}}>
            <Link className="m-2 nav-item nav-link" style={{"color": "#182C61", fontSize: "24px"}} to="/">Accueil</Link>
            <Link className="m-2 nav-item nav-link" style={{"color": "#182C61", fontSize: "24px"}} to="/compte">Compte</Link>
            <Link className="m-2 nav-item nav-link" style={{"color": "#182C61", fontSize: "24px"}} to="/FAQ">FAQ</Link>
          </nav>

          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/login/oauth2/code/google">
              <Authenticate/>
            </Route>
            <GuardRoute exact path="/compte" protectedComponent={Compte}/>
          </Switch>
        </div>
      </Router>


    </div>
  );
}


export default App;
