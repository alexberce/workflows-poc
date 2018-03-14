import React, { Component } from 'react';

class Approval extends Component {

    constructor(params){
        super(params);

        this.state = {
            form: 'Audition form',
            assignedTo: 'Warehouse supervisor',
        }
    }

    render() {

        const {isInEditMode} = this.props;

        return (
            <div className="workflow-approval-component">

                <div className="workflow-component-content-item">
                    <div className="workflow-component-content-item-name">Form:</div>
                    <div className="workflow-component-content-item-value">
                        {
                            isInEditMode
                                ? <input defaultValue={this.state.form} />
                                : <div>{this.state.form}</div>
                        }
                    </div>
                </div>

                <div className="workflow-component-content-item">
                    <div className="workflow-component-content-item-name">Assigned to:</div>
                    <div className="workflow-component-content-item-value">
                        {isInEditMode
                            ? <input defaultValue={this.state.assignedTo} />
                            : <div>{this.state.assignedTo}</div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Approval;