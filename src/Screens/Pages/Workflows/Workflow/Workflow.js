import React, { Component } from 'react';
import './Workflow.css';

import {connect} from "react-redux";
import WorkflowComponent from "../../../../Components/Workflows/WorkflowComponent/WorkflowComponent";
import Approval from "../../../../Components/Workflows/WorkflowsComponents/Approval/Approval";

class Workflow extends Component {

    constructor(params){
        super(params);

        //This will be moved to the model ... don't have time for it right now
        let workflows = [];
        try {
            workflows = JSON.parse(localStorage.getItem('workflows')) || [];
        } catch (e) {

        }

        const {workflowId} = this.props.match.params;
        const workflow = workflows.filter(workflow => ~~workflow.id === ~~workflowId);

        this.state = {
            workflow: workflow[0],
        };
    }

    componentWillMount(){
        //This will be moved in the saga ... don't have time for it right now
    }

    render() {
        const {workflowId} = this.props.match.params;

        return (
            <div className="workflow-page">
                <div className="page-title">Workflow {this.state.workflow.name} #{workflowId}</div>

                <div className="workflow-components-wrapper">
                    <WorkflowComponent
                        title='Form Submit'
                        ContentComponent={Approval}
                    />
                    <br />
                </div>
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {}
};

export default connect(mapStateToProps)(Workflow);