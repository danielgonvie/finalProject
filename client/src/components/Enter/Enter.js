import React, { Component } from 'react'
import Login from '../Login/Login'
import SignUp from '../Signup/Signup'
import "./Enter.css";
import Guest from '../Guest/Guest';

export default class Enter extends Component {
    render() {
        return (
            <div className="enterpage">
                <Login setUser={this.setUser}></Login>
                <SignUp setUser={this.setUser}></SignUp>
                <Guest setUser={this.setUser}></Guest>
            </div>
        )
    }
}
