import React, { Component } from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import './Header.css';

import Menu from './Menu/Menu.js';
import Logo from "../../../../Components/Logo/Logo";
import {UserTypes} from "../../../../Redux/UserReducer";

class Header extends Component {

    handleLogout = () => {
        this.props.onLogoutClick();
    };

    render() {
        return (
            <header className="app-header">
                <div className="app-boundary ">
                    <Logo className="app-logo" />
                    {
                        navigator.onLine
                            ? <div
                                className="logout-button"
                                onClick={this.handleLogout}
                            >
                                Logout
                            </div>
                            : null
                    }
                    <Menu />
                </div>
            </header>
        );
    }
}


const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {
        onLogoutClick: () => {
            dispatch({type: UserTypes.LOGOUT})
        }
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Header));