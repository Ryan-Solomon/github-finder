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
  const [alert, setAlert] = useState(null);

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
                    <Search users={users} setAlert={handleAlert} />
                  </React.Fragment>
                )}
              />
              <Users loading={loading} users={users} />
            </div>
          </div>

          <Route exact path='/about' component={About} />
          <Route exact path='/user/:login' component={User} />
        </Switch>
      </Router>
    </GithubState>
  );
};

export default App;
