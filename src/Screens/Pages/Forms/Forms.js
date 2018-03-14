import React, { Component } from 'react';
import './Forms.css';

import API from "../../../Services/Api";
import {connect} from "react-redux";

const api = API.create();

class Forms extends Component {

    constructor(params){
        super(params);

        //This will be moved to the model ... don't have time for it right now
        let forms = [];
        try {
            forms = JSON.parse(localStorage.getItem('forms')) || [];
        } catch (e) {

        }

        this.state = {
            forms: forms,
        };
    }

    componentWillMount(){
        //This will be moved in the saga ... don't have time for it right now
        api.getForms(this.props.token)
        .then(result => {
            //This will be moved to the model ... don't have time for it right now
            try {
                const forms = result.data.data || [];
                localStorage.setItem('forms', JSON.stringify(forms));
                this.setState({ forms: forms });
            } catch (e) {

            }
        });
    }

    render() {
        return (
            <div className="forms-page">
                <div className="page-title">My Forms</div>

                <div className="forms-page-forms-wrapper">
                    {this.state.forms.length ? this.state.forms.map((form, index) => (
                        <div key={form.id} {...form} />
                    )): null}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.user.token,
    }
};

export default connect(mapStateToProps)(Forms);