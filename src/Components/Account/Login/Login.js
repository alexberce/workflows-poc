import React, { Component } from 'react';
import {connect} from "react-redux";

import './Login.css';
import Logo from "../../Logo/Logo";

import {UserTypes} from "../../../Redux/UserReducer";

class Login extends Component {

    constructor(params){
        super(params);

        this.state = {
            username: '',
            password: '',
        };
    }

    componentDidReceivedProps(nextProps){
        if(nextProps.isLoggedIn){
            this.props.history.push("/");
        }
    }

    handleChangeTextUsername = (event) => {
        this.setState({
            username: event.target.value,
        });
    } ;

    handleChangeTextPassword = (event) => {
        this.setState({
            password: event.target.value,
        });
    };

    handleLogin = () => {
        this.props.onLoginClick(this.state.username, this.state.password);
    };

    render() {
        return (
            <div className="login-component">
                <div className="logo-wrapper"><Logo/></div>

                <div className="login-form">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={this.handleChangeTextUsername.bind(this)}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChangeTextPassword.bind(this)}
                    />
                    <button
                        value="Login"
                        onClick={this.handleLogin}
                        disabled={this.props.isPerformingLoginRequest}
                    >Login</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isPerformingLoginRequest: state.user.isPerformingLoginRequest,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLoginClick: (username, password) => {
            dispatch({type: UserTypes.LOGIN_WITH_USERNAME_AND_PASSWORD, username, password})
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);