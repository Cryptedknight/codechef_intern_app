import React, { Component } from 'react'
import ProblemSection from './problem_section/ProblemSection'
import SubmitSection from './submit_section/SubmitSection'
import Tabs from '../../global_components/tab_controller/Tabs'
import Logout from '../../global_components/logout/Logout';
import SuccessSection from './success_section/SuccessSection';
import Timer from '../../global_components/timer/Timer';
// import {data} from '../../problem';
import './problem.css'


const problem = require('../../problem');
const contest = require('../../contest');
export default class Problem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            problem_id : ""
        }
        this.test = this.test.bind(this)
    }

    test() {
        this.setState({
            problem_id : "ANJKD123"
        })
    }
    
    componentDidMount() {
        this.test();
    }

    render() {
        return (
            <>
                
            <div className="problem_header_flex">
                <div className="problem_header">
                    <div className="problem_name">{problem.result.data.content.problemName}</div>
                    <div className="problem_code">Problem Code: {problem.result.data.content.problemCode}</div>
                    <div className="timer"><Timer startDate={contest.result.data.content.startDate} endDate={contest.result.data.content.endDate}/></div>
                </div>
                <div className="logout"><Logout /></div>
            </div>

            <div className="problem_content_flex">    
                <div className="problem_content">
                    <Tabs className ="tabs">
                        <div label="Problems">
                            <ProblemSection data={problem.result.data.content}/>
                        </div>

                        <div label="Submit">
                            <SubmitSection data={problem.result.data.content}/>
                        </div>
                    </Tabs>
                </div>
                <div className="submissions">
                    <SuccessSection/>
                </div>
            </div>
            </>
        );
    }
}
