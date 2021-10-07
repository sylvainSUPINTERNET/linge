import React from 'react';
import logo from './logo.svg';
import './App.css';

import { GoogleLogin, GoogleLogout } from 'react-google-login';

function App() {
  const responseGoogle = (response:any) => {
    console.log(response);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          <a href="https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly email openid profile&prompt=consent&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=http%3A//localhost:3000/login/oauth2/code/google&client_id=1048864095225-kr6vc9ghthfk3ocqln10pbr2n1sjqpkr.apps.googleusercontent.com">
            GOOGLE
          </a>

        </a>
      </header>
    </div>
  );
}

export default App;
