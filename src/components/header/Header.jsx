import { arrayOf, shape, string } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';


const Header = ({links}) => {
  return ( 
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">TACHES</Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav  ms-auto" >
          {
            React.Children.toArray(
            links.map(link => ( <Link to={link.to} className="nav-link">{link.name}</Link>))
            )
          }
        </div>
      </div>
    </div>
  </nav> 
);
}

Header.propTypes = {
  links : arrayOf(shape( {
    to: string,
    name: string
  }))
}
export default Header;