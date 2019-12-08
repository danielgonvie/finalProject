import React, { Component } from 'react'
import AuthService from '../../services/AuthService';
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.authService = new AuthService();
  }

  state = {
    username: '',
    password: ''
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
       /*  history.push("/") */
      },
      (error) => {
        console.error(error)
      }
    )
  }

  render() {

    const { username, password } = this.state;

    return (
      <div className="login">
      <div className="section-login">
      <div className="title-login">
        <h1>Login</h1>
        </div>
        <div className="container-login">
        <form onSubmit={this.handleLogin}>
        <div className="fields-login">
        <div className="username-login">
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" value={username} onChange={this.handleChange}/>
        </div>
        <div className="password-login">
          <label htmlFor="password" >Password: </label>
          <input type="password" name="password" value={password} onChange={this.handleChange}/>
          </div>
          </div>
          <div className="button-login">
          <input type="submit" value="Login"/>
          </div>
        </form>
        </div>
        </div>
      </div>
    )
  }
}
