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
import { Rencontre } from './components/rencontre/rencontre.component';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Team } from './components/team/team.component';
import { Join } from './components/join/join.component';


function App() {
  return (
    <div className="App">
      <Router>
        <div>

          <nav style={{display:"flex", justifyContent:"center"}}>
            <Link className="m-2 nav-item nav-link" style={{"color": "#182C61", fontSize: "24px"}} to="/">Accueil</Link>
            {/* <Link className="m-2 nav-item nav-link" style={{"color": "#182C61", fontSize: "24px"}} to="/compte">Compte</Link> */}
            <Link className="m-2 nav-item nav-link" style={{"color": "#182C61", fontSize: "24px"}} to="/team">Equipe</Link>
          </nav>

          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/login/oauth2/code/google">
              <Authenticate/>
            </Route>
            <GuardRoute exact path="/compte" protectedComponent={Compte}/>
            <GuardRoute exact path="/rencontre" protectedComponent={Rencontre}/>
            <GuardRoute exact path="/team" protectedComponent={Team} />
            <Route exact path="/team/join">
              <Join/>
            </Route>
          </Switch>
        </div>
      </Router>


    </div>
  );
}


export default App;
