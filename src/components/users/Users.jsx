import React, { useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

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

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

export default Users;
