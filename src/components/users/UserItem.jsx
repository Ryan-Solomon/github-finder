import React from 'react';

class UserItem extends React.Component {
  state = {
    id: '',
    login: '',
    avatarUrl: '',
    htmlUrl: '',
  };

  render() {
    const { avatarUrl, htmlUrl, login } = this.state;
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
  }
}

export default UserItem;
