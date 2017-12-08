import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <nav id="nav">
        <div className="logo">
          <Link to="/"><h3><i className="fa fa-film" aria-hidden="true"/> MoviePedia</h3></Link>
        </div>
      </nav>
    );
  }
}



export default Header;
