import React, { Component } from 'react';
import './DefaultWorkflowComponentButtons.css';

class WorkflowComponentButtons extends Component {
    render() {
        const {cancelButtonClickHandler, saveButtonClickHandler} = this.props;

        return (
            <div className="workflow-component-buttons">
                <div
                    className="workflow-component-button workflow-component-button-cancel"
                    onClick={cancelButtonClickHandler}
                >
                    <div>Cancel</div>
                </div>
                <div
                    className="workflow-component-button workflow-component-button-save"
                    onClick={saveButtonClickHandler}
                >
                    <div>Save</div>
                </div>
            </div>
        );
    }
}

export default WorkflowComponentButtons;