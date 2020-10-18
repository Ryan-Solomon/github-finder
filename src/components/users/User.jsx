import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { Repos } from '../repos/Repos';

class User extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propTypes = {
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
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
      company,
      html,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    const { loading, repos } = this.props;

    if (loading) return <Spinner />;

    return (
      <React.Fragment>
        <Link to='/' className='btn btn-light'>
          Back To Search
        </Link>
        Hireable: {hireable ? 'Yes' : 'No'}
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
            <a href={html_url} className='btn btn-dark my-1'>
              Visit Githun Profile
            </a>
            <ul>
              <li>
                {login && (
                  <React.Fragment>
                    <strong>Username: </strong> {login}
                  </React.Fragment>
                )}
              </li>
              <li>
                {company && (
                  <React.Fragment>
                    <strong>Company: </strong> {company}
                  </React.Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <React.Fragment>
                    <strong>Website: </strong> {blog}
                  </React.Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers: {followers}</div>
          <div className='badge badge-success'>Following: {following}</div>
          <div className='badge badge-light'>Public Repos: {public_repos}</div>
          <div className='badge badge-dark'>Public Gists: {public_gists}</div>
        </div>
        <Repos repos={repos} />
      </React.Fragment>
    );
  }
}

export default User;
