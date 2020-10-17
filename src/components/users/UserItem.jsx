import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  htmlUrl: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default UserItem;
