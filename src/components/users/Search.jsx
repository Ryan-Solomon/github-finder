import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import GithubContext from '../../context/github/githubContext';

const Search = (props) => {
  const githubContext = useContext(GithubContext);
  const [input, setInput] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (input === '') {
      props.setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(input);
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
      {githubContext.users.length > 0 ? (
        <button
          onClick={githubContext.clearUsers}
          className='btn btn-light btn-block'
        >
          Clear
        </button>
      ) : null}
    </div>
  );
};

Search.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default Search;
