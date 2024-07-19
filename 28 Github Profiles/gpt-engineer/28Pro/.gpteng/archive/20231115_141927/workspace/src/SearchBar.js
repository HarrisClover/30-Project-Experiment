import React from 'react';
import GithubService from './GithubService';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = async (event) => {
    event.preventDefault();

    const response = await GithubService.get(`/users/${this.state.term}`);
    this.props.onSubmit(response.data);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Github User Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
