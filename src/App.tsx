import * as React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Home from './containers/home';
import Profile from './containers/profile';

import './App.css';
const homeSvg = require('./assets/home.svg');
const profileSvg = require('./assets/profile.svg');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact={true} path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <div className="navContainer">
            <NavLink className="navLink" to="/">
              <img src={homeSvg} alt="home" />
            </NavLink>
            <NavLink className="navLink" to="/profile">
              <img src={profileSvg} alt="profile" />
            </NavLink>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
