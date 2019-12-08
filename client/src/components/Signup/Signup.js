import React, { Component } from 'react'
import AuthService from '../../services/AuthService'
import "./Signup.css";

export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.authService = new AuthService();
  }

  state = {
    username: '',
    password: '',
    picture: '',
    email: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({...this.state, [name]:value})
  }
  handleSignUp = (e) => {
    e.preventDefault()
    const { history, setUser } = this.props;
    this.authService.signup(this.state)
    .then(
      (user) => {
        setUser(user);
/*         history.push("/") */
      },
      (error) => {
        console.error(error)
      }
    )
  }

  handleUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append('picture', e.target.files[0])
    this.authService.upload(uploadData)
    .then(
      (data) => {
        this.setState({...this.state, picture: data.secure_url})
      },
      (error) => {
        console.error(error)
      }
    )
  }

  render() {
    const { username, password, email } = this.state;
    return (
      <div className="signup">
      <div className="section-signup">
        <h1>Signup</h1>
        <div className="container-signup">
        <form onSubmit={this.handleSignUp}>
        <div className="username-signup">
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" value={username} required onChange={this.handleChange}/>
          </div>
          <div className="email-signup">
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" value={email} required onChange={this.handleChange}/>
          </div>
          <div className="password-signup">
          <label htmlFor="password">Password: </label>
          <input type="password" value={password} name="password" required onChange={this.handleChange}/>
          </div>
          <div className="picture-signup">
          <input type="file" name="picture" onChange={this.handleUpload} />
          </div>
          <div className="button-signup">
          <input type="submit" value="Create account"/>
          </div>
        </form>
        </div>
      </div>
      </div>
    )
  }
}
