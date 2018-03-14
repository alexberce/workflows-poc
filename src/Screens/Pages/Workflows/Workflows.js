import React, { Component } from 'react';
import './Workflows.css';

import {connect} from "react-redux";
import WorkflowsListItem from "../../../Components/Workflows/WorkflowsList/WorkflowsListItem";
import API from "../../../Services/Api";
const api = API.create();

class Workflows extends Component {

    constructor(params){
        super(params);

        //This will be moved to the model ... don't have time for it right now
        let workflows = [];
        try {
            workflows = JSON.parse(localStorage.getItem('workflows')) || [];
        } catch (e) {

        }

        this.state = {
            workflows: workflows,
        };
    }

    componentWillMount(){
        api.getForms(this.props.token)
            .then(result => {
                //This will be moved to the model ... don't have time for it right now
                try {
                    const workflows = result.data.data || [];
                    localStorage.setItem('workflows', JSON.stringify(workflows));
                    this.setState({ workflows: workflows });
                } catch (e) {

                }
            });
    }

    render() {
        return (
            <div className="workflows-page">
                <div className="page-title">Workflows</div>

                <div className="workflows-page-workflows-wrapper">
                    {this.state.workflows.length ? this.state.workflows.map((workflow, index) => (
                        <WorkflowsListItem key={workflow.id} {...workflow} />
                    )): null}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.user.token,
    }
};

export default connect(mapStateToProps)(Workflows);