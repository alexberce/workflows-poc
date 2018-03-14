import React, { Component } from 'react';
import './Offline.css';

class Offline extends Component {

    constructor(params){
        super(params);

        this.state = {
            appOnline: true
        };
    }

    componentDidMount(){
        window.addEventListener('offline', () => this.onOfflineStatus());
        window.addEventListener('online', () => this.onOnlineStatus());

        if(navigator.onLine === true){
            this.onOnlineStatus();
        } else {
            this.onOfflineStatus();
        }
    }

    onOfflineStatus () {
        this.setState({
            appOnline: false
        });
    }

    onOnlineStatus () {
        this.setState({
            appOnline: true
        });
    }

    render() {
        if(this.state.appOnline === true)
            return null;

        return (
            <div className="offline-notification">You seem to be offline</div>
        );
    }
}

export default Offline;