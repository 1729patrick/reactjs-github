import React, { Component } from 'react';
import ajax from '@fdaciuk/ajax';
import AppContainer from './components/app-container';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: null,
      repos: [],
      starred: [],
      isFetching: false,
    };
  }

    handleSearch = (e) => {
      const value = e.target.value;
      const key = e.which || e.keyCode;
      const ENTER = 13;

      if (key === ENTER) {
        this.setState({ isFetching: true });

        ajax().get(this.getGitHubApi(value)).then((res) => {
          this.setState({
            userInfo: {
              username: res.name,
              image: res.avatar_url,
              login: res.login,
              repos: res.public_repos,
              followers: res.followers,
              following: res.following,
            },
            repos: [],
            starred: [],
          });
        }).always(() => { this.setState({ isFetching: false }); });
      }
    }

    handleAction = action => () => {
      const { login } = this.state.userInfo;
      ajax().get(this.getGitHubApi(login, action)).then((res) => {
        this.setState({
          [action]: res.map(r => ({
            link: r.html_url,
            name: r.name,
            id: r.id,
          })),
        });
      });
    }

    getGitHubApi = (login, action) => {
      const internalAction = action ? `/${action}` : '';
      return `https://api.github.com/users/${login}${internalAction}`;
    }

    render() {
      return (
        <AppContainer
          {...this.state}
          handleSearch={this.handleSearch}
          handleAction={this.handleAction}
        />
      );
    }
}

export default App;
