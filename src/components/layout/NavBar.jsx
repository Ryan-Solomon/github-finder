import PropTypes from 'prop-types';
import React from 'react';

class NavBar extends React.Component {
  static defaultProps = {
    title: 'Github Finder',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>{this.props.title}</h1>
      </nav>
    );
  }
}

export default NavBar;
