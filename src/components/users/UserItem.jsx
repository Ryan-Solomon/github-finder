import PropTypes from 'prop-types';
import React from 'react';

const UserItem = (props) => {
  const { avatarUrl, htmlUrl, login } = props;
  return (
    <div className='card text-center'>
      <img
        src={avatarUrl}
        alt='User'
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <a href={htmlUrl} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  htmlUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default UserItem;
