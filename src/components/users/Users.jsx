import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    users: [],
  };

  renderList = () => {
    const list = this.state.users.map((user) => {
      return (
        <UserItem
          key={user.id}
          id={user.id}
          avatarUrl={user.avatarUrl}
          htmlUrl={user.htmlUrl}
          login={user.login}
        />
      );
    });
    return list;
  };

  render() {
    return <div>{this.renderList()}</div>;
  }
}

export default Users;
