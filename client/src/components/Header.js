import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <nav id="nav">
          <div className="logo">
            <Link to="/"><h2>1 of One</h2></Link>
          </div>
          <ul className="navbar-items">
            <li className="nav-item"><NavLink exact to="/about" activeClassName="active">About</NavLink></li>
            <li className="nav-item"><NavLink to="/cart" activeClassName="active">Cart</NavLink></li>
          </ul>
      </nav>
    );
  }

}

export default Header;
