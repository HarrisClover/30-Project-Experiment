import React from 'react';
import GithubService from './GithubService';
import Repository from './Repository';

class RepositoryList extends React.Component {
  state = { repos: [] };

  async componentDidMount() {
    const response = await GithubService.get(this.props.repos_url);
    this.setState({ repos: response.data });
  }

  render() {
    const renderedList = this.state.repos.map((repo) => {
      return <Repository key={repo.id} repo={repo} />;
    });

    return <div>{renderedList}</div>;
  }
}

export default RepositoryList;
