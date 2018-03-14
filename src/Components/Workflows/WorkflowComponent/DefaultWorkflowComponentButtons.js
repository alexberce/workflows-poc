import React, { Component } from 'react';
import './DefaultWorkflowComponentButtons.css';

class DefaultWorkflowComponentButtons extends Component {

    render() {
        const {deleteButtonClickHandler, editButtonClickHandler} = this.props;

        return (
            <div className="workflow-component-buttons">
                <div
                    className="workflow-component-button workflow-component-button-delete"
                    onClick={deleteButtonClickHandler}
                >
                    <div>Delete</div>
                </div>
                <div
                    className="workflow-component-button workflow-component-button-edit"
                    onClick={editButtonClickHandler}
                >
                    <div>Edit</div>
                </div>
            </div>
        );
    }
}

export default DefaultWorkflowComponentButtons;