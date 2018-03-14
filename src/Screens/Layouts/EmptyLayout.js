import React, { Component } from 'react';
import './EmptyLayout.css';

class EmptyLayout extends Component {
    render() {
        return (
            <div className="layout-empty">
                {this.props.children}
            </div>
        );
    }
}
export default EmptyLayout;