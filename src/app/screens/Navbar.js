import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Home from './Home';
import Feature from './Feature';
import Pricing from './Pricing';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Feature">
                  Feature
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Pricing">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/Feature" component={Feature} />
          <Route path="/Pricing" component={Pricing} />
        </div>
      </div>
    );
  }
}
