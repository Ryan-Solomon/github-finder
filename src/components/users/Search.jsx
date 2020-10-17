import PropTypes from 'prop-types';
import React from 'react';

class Search extends React.Component {
  state = {
    input: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.input === '') {
      this.props.setAlert('Please enter something', 'light');
    } else {
      this.props.searchUsers(this.state.input);
      this.setState({ input: '' });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            onChange={(e) => this.setState({ input: e.target.value })}
            type='text'
            name='test'
            placeholder='Search Users'
            value={this.state.input}
          />
          <input type='submit' className='btn-dark btn-block' />
        </form>
        {this.props.users.length > 0 ? (
          <button
            onClick={this.props.clearUsers}
            className='btn btn-light btn-block'
          >
            Clear
          </button>
        ) : null}
      </div>
    );
  }
}

export default Search;
