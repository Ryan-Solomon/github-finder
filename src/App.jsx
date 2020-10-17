import axios from 'axios';
import React from 'react';
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
      return <Alert message={this.state.alert.message} />;
    }

    return (
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
    );
  }
}

export default App;
