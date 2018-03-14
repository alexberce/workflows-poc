import React, { Component } from 'react';
import './Home.css';
import LoginComponent from "../../../Components/Account/Login/Login";

class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <LoginComponent />
            </div>
        );
    }
}

export default Home;