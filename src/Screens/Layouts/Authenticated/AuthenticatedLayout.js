import React, { Component } from 'react';
import Offline from "../../../Components/Notifications/Offline/Offline";
import Header from "./Header/Header";
import './AuthenticatedLayout.css';

class AuthenticatedLayout extends Component {
    render() {
        return (
            <div className="layout-authenticated">
                <Offline />
                <Header />
                <div className="app-boundary app-page-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default AuthenticatedLayout;