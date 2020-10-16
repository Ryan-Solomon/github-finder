import PropTypes from 'prop-types';
import React from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

const Users = ({ users, loading }) => {
  const renderList = () => {
    const list = users.map((user) => {
      return (
        <UserItem
          key={user.id}
          id={user.id}
          avatarUrl={user.avatar_url}
          htmlUrl={user.html_url}
          login={user.login}
        />
      );
    });
    return list;
  };

  if (loading)
    return (
      <h1>
        <Spinner />
      </h1>
    );

  return <div style={userStyle}>{renderList()}</div>;
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

export default Users;
