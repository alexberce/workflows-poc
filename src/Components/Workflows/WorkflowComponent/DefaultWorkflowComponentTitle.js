import React, { Component } from 'react';
import './DefaultWorkflowComponentTitle.css';

class DefaultWorkflowComponentTitle extends Component {
    render() {
        const {title} = this.props;

        return (
            <div className="workflow-component-title">
                {title}
            </div>
        );
    }
}

export default DefaultWorkflowComponentTitle;