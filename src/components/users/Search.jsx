import React from 'react';

class Search extends React.Component {
  state = {
    input: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.input);
    this.setState({ input: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            onChange={(e) => this.setState({ input: e.target.value })}
            type='text'
            name='test'
            placeholder='Search Users'
            value={this.state.input}
          />
          <input type='submit' className='btn-dark btn-block' />
        </form>
      </div>
    );
  }
}

export default Search;
