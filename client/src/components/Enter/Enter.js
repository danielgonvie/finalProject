import React, { Component } from 'react'
import Login from '../Login/Login'
import SignUp from '../Signup/Signup'
import "./Enter.css";
import Guest from '../Guest/Guest';

export default class Enter extends Component {
    render() {
        return (
            <div className="enterpage">
                <Login match={this.props.match} setUser={this.props.setUser}></Login>
                <SignUp match={this.props.match} setUser={this.props.setUser}></SignUp>
                <Guest match={this.props.match} setUser={this.props.setUser}></Guest>
            </div>
        )
    }
}
