import React, { Component } from 'react'
import './recent_activity.css'

export default class RecentActivity extends Component {


    constructor(props) {
        super(props);
        this.fetch_recent_activity = this.fetch_recent_activity.bind(this)
        this.state = {
            //have to decide state yet
        };
    }


    fetch_recent_activity() {
        //fetching the recent activity through php
    }

    componentDidMount() {
        // fetch_recent_activity()        
    }

    render() {
        return (
            <div className = "ra">
                Recent Activity
            </div>
        )
    }
}
