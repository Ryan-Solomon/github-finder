import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <React.Fragment>
      <h1>About This App</h1>
      <p>App to search GitHub users</p>
      <p>Version: 1.0.0</p>
      <Link to='/'>
        <p>Home</p>
      </Link>
    </React.Fragment>
  );
};

export default About;
