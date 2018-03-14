import React, { Component } from 'react';
import './WorkflowComponent.css';

import DefaultWorkflowComponentTitle from "./DefaultWorkflowComponentTitle";
import DefaultWorkflowComponentEditStateButtons from "./DefaultWorkflowComponentEditStateButtons";
import DefaultWorkflowComponentButtons from "./DefaultWorkflowComponentButtons";

class WorkflowComponent extends Component {

    constructor(params){
        super(params);

        this.state = {
            isInEditMode: false,
        };
    }

    clickHandlerEdit(){
        this.setState({
            isInEditMode: true,
        });
    }

    clickHandlerCancel(){
        this.setState({
            isInEditMode: false,
        });
    }

    clickHandlerSave(){
        this.setState({
        });
    }

    clickHandlerDelete(){
        this.setState({
        });
    }

    render() {
        const {title, ContentComponent} = this.props;

        return (
            <div className="workflow-component">
                <DefaultWorkflowComponentTitle
                    title={title}
                />

                <span className="workflow-component-content">
                    <ContentComponent
                        isInEditMode={this.state.isInEditMode}
                    />
                </span>

                {
                    this.state.isInEditMode
                        ? <DefaultWorkflowComponentEditStateButtons
                            cancelButtonClickHandler={this.clickHandlerCancel.bind(this)}
                            saveButtonClickHandler={this.clickHandlerSave.bind(this)}
                        />
                        : <DefaultWorkflowComponentButtons
                            editButtonClickHandler={this.clickHandlerEdit.bind(this)}
                            deleteButtonClickHandler={this.clickHandlerDelete.bind(this)}
                        />
                }
            </div>
        );
    }
}

export default WorkflowComponent;