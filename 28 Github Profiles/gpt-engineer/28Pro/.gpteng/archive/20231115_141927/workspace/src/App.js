import React from 'react';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';

class App extends React.Component {
  state = { user: null };

  onSearchSubmit = (user) => {
    this.setState({ user });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <UserProfile user={this.state.user} />
      </div>
    );
  }
}

export default App;
