import React, { Component } from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  renderUserLinks() {
    switch (this.props.user) {
      case null:
        return 'still deciding';
      case false:
        return (
          <li><Link to='/login'>Login</Link></li>
        );
      default:
        return (
          <li><a href='/api/logout'>Logout</a></li>
        );
    }
  }

  render() {
    return (
      <nav id="nav">
          <div className="logo">
            <Link to="/"><h2>1 of One</h2></Link>
          </div>
          <ul className="navbar-items">
            {this.renderUserLinks()}
          </ul>
      </nav>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(Header);
