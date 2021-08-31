import { shape, string } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
const Header = ({links}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to='/'>TACHES</Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
          {
                React.Children.toArray(
                    links   
                    .map(({to, name}) =>  <Link className="navbar-brand" to={to}>{name}</Link>)
                )
              }
        </ul>
      </div>
    </div>
  </nav>
  );
};

Header.propsType = {
  links: shape({
    to: string,
    name: string
  })
}


export default Header;