import React, { Component } from 'react';

import './EmptyState.css';
import emptyState from '../../../Assets/Images/States/Empty/empty-state-forms-v1.png';

class EmptyState extends Component {
    render() {
        const {text} = this.props;

        return (
            <div className="empty-state-wrapper">
                <img src={emptyState} {...this.props} alt="Empty state" />
                <div className="empty-state-text">{text}</div>
            </div>
        );
    }
}

export default EmptyState;