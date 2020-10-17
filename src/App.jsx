import axios from 'axios';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from '../src/pages/About';
import './App.css';
import Alert from './components/layout/Alert';
import NavBar from './components/layout/NavBar';
import Search from './components/users/Search';
import Users from './components/users/Users';

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  searchUsers = async (searchTerm) => {
    this.setState({ loading: true });
    const { data } = await axios.get(
      `https://api.github.com/search/users?q=${searchTerm}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: data.items, loading: false });
  };

  clearUsers = () => {
    this.setState({ users: [] });
  };

  setAlert = (message, type) => {
    this.setState({ alert: { message, type } });
  };

  render() {
    if (this.state.alert) {
      return (
        <div className={`alert alert-${this.state.alert.type}`}>
          <Alert message={this.state.alert.message} />
        </div>
      );
    }

    return (
      <Router>
        <Switch>
          <div className='App'>
            <NavBar title='NavBar' />
            <div className='container'>
              <Search
                users={this.state.users}
                clearUsers={this.clearUsers}
                searchUsers={this.searchUsers}
                setAlert={this.setAlert}
              />
              <Users loading={this.state.loading} users={this.state.users} />
            </div>
          </div>
          <Route exact path='/about' component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
