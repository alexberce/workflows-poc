import React, { Component } from 'react';
import './WorkflowsListItem.css';
import {withRouter} from "react-router-dom";

class WorkflowsListItem extends Component {

    workflowClicked(id){
        this.props.history.push('workflow/' + id);
    }

    render() {
        const {id, name} = this.props;

        return (
            <div className="workflow-item" onClick={() => this.workflowClicked(id)}>
                <span className="workflow-item-name">{name}</span>
            </div>
        );
    }
}

export default withRouter(WorkflowsListItem);