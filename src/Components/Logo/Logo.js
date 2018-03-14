import React, { Component } from 'react';
import logo from '../../Assets/Images/logo.png';

class Logo extends Component {
    render() {
        return (
            <img src={logo} {...this.props} alt="123FormBuilder logo" />
        );
    }
}

export default Logo;