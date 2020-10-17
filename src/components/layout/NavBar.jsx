import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>{title}</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NavBar;
