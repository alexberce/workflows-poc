import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import './App.css';
import Routes from "./Routing/Routes";


class App extends Component {

    constructor(params){
        super(params);

        this.state = {
            isLoggedIn: this.props.isLoggedIn,
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            isLoggedIn: nextProps.isLoggedIn
        });
    }

    render() {
        const childProps = {
            isAuthenticated: this.state.isLoggedIn,
        };

        return (
            <div className="app">
                <Routes childProps={childProps}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isPerformingLoginRequest: state.user.isPerformingLoginRequest,
        isLoggedIn: state.user.isLoggedIn,
    }
};

export default withRouter(connect(mapStateToProps)(App));