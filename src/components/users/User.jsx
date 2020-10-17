import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';

class User extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    getUser: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html,
      html_url,
      followers,
      following,
      public_repos,
      public_gist,
      hireable,
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Spinner />;

    return (
      <React.Fragment>
        <Link to='/' className='btn btn-light'>
          Back To Search
        </Link>
        Hireable: {hireable ? Yes : No}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              alt='Avatar'
              className='round-img'
              style={{ width: '150px' }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <React.Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </React.Fragment>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default User;
