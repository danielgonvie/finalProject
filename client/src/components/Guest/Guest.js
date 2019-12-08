import React, { Component } from 'react'
import AuthService from '../../services/AuthService';
import "./Guest.css";

export default class Guest extends Component {
  constructor(props) {
    super(props);
    this.authService = new AuthService();
  }

  state = {
    username: '',
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({...this.state, [name]:value})
  }
  handleLogin = (e) => {
    const { setUser, history } = this.props;
    e.preventDefault()
    this.authService.login(this.state)
    .then(
      (user) => {
        setUser(user)
        history.push("/")
      },
      (error) => {
        console.error(error)
      }
    )
  }

  render() {
    const { username} = this.state;
    return (
      <div className="guest">
      <div className="section-guest">
        <h1>Enter as guest</h1>
        <div className="container-guest">
        <form onSubmit={this.handleLogin}>
        <div className="username-guest">
          <label htmlFor="username">Name: </label>
          <input type="text" name="username" value={username} onChange={this.handleChange}/>
          </div>
          <div className="button-guest">
          <input type="submit" value="Login"/>
          </div>
        </form>
        </div>
        </div>
      </div>
    )
  }
}