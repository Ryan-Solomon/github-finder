import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Search = (props) => {
  const [input, setInput] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (input === '') {
      props.setAlert('Please enter something', 'light');
    } else {
      props.searchUsers(input);
      setInput('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          onChange={(e) => setInput(e.target.value)}
          type='text'
          name='test'
          placeholder='Search Users'
          value={input}
        />
        <input type='submit' className='btn-dark btn-block' />
      </form>
      {props.users.length > 0 ? (
        <button onClick={props.clearUsers} className='btn btn-light btn-block'>
          Clear
        </button>
      ) : null}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

export default Search;
