import axios from 'axios';
import React from 'react';
import './App.css';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';

class App extends React.Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const { data } = await axios.get('https://api.github.com/users');
    this.setState({ users: data, loading: false });
  }

  render() {
    return (
      <div className='App'>
        <NavBar title='NavBar' />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
