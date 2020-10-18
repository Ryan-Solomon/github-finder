import axios from 'axios';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from '../src/pages/About';
import './App.css';
import Alert from './components/layout/Alert';
import NavBar from './components/layout/NavBar';
import Search from './components/users/Search';
import User from './components/users/User';
import Users from './components/users/Users';
import GithubState from './context/github/GithubState';

const App = () => {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [repos, setRepos] = useState([]);

  const getUser = async (username) => {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUser(data);
    setLoading(false);
  };

  const getUserRepos = async (username) => {
    setLoading(true);

    const { data } = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setRepos(data);
    setLoading(false);
  };

  const clearUsers = () => {
    setUsers([]);
  };

  const handleAlert = (message, type) => {
    setAlert({ alert: { message, type } });
  };

  if (alert) {
    return (
      <div className={`alert alert-${alert.type}`}>
        <Alert message={alert.message} />
      </div>
    );
  }

  return (
    <GithubState>
      <Router>
        <Switch>
          <div className='App'>
            <NavBar title='NavBar' />
            <div className='container'>
              <Route
                exact
                path='/'
                render={(props) => (
                  <React.Fragment>
                    <Search
                      users={users}
                      clearUsers={clearUsers}
                      setAlert={handleAlert}
                    />
                  </React.Fragment>
                )}
              />
              <Users loading={loading} users={users} />
            </div>
          </div>

          <Route exact path='/about' component={About} />
          <Route
            exact
            path='/user/:login'
            render={(props) => (
              <User
                {...props}
                getUserRepos={getUserRepos}
                repos={repos}
                getUser={getUser}
                user={user}
                loading={loading}
              />
            )}
          />
        </Switch>
      </Router>
    </GithubState>
  );
};

export default App;
