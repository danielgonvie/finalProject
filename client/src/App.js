import React from "react";
import "./App.css";
import GameService from "./services/GameService";

import { Switch, Route } from "react-router-dom";

import AuthService from "./services/AuthService";

import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Enter from "./components/Enter/Enter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.gameService = new GameService();
    this.authService = new AuthService();
  }

  state = {
    user: null
  };

  setUser = user => {
    this.setState({ ...this.state, user });
  };

  fetchUser = () => {
    if (this.state.user === null) {
      this.authService
        .loggedInUser()
        .then(
          user => {
            this.setUser(user);
          },
          error => {
            this.setUser(false);
          }
        )
        .catch(() => {
          this.setUser(false);
        });
    }
  };

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    this.fetchUser();
    const { user } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {user && (
            <Switch>
              <Route
                exact
                path="/enter"
                render={match => {
                  return (
                    <React.Fragment>
                      <Enter {...match} setUser={this.setUser}></Enter>
                    </React.Fragment>
                  );
                }}
              />
              <Route
                exact
                path="/"
                render={match => {
                  return (
                    <React.Fragment>
                      <Home></Home>
                    </React.Fragment>
                  );
                }}
              />
            </Switch>
          )}
          {!user && (
            <Switch>
              <Route
                exact
                path="/enter"
                render={match => {
                  return (
                    <React.Fragment>
                      <Enter {...match} setUser={this.setUser}></Enter>
                    </React.Fragment>
                  );
                }}
              />
              <Route
                exact
                path="/home"
                render={match => {
                  return (
                    <React.Fragment>
                      <Home></Home>
                    </React.Fragment>
                  );
                }}
              />
            </Switch>
          )}
        </header>
      </div>
    );
  }
}

export default App;
