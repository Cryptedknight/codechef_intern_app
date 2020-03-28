import React, {Component} from "react";
import './leaderboard.css';

var leaderboard = require('../../../leaderboard');
var contest = require('../../../contest');

export default class Leaderboard extends Component{
    
    constructor(){
        super();
        this.state = {
            list : []
        };
        this.test = this.test.bind(this);
        this.fetch_leaderboard = this.fetch_leaderboard.bind(this);
    }

    fetch_leaderboard() {
        //
    }

    // componentDidMount(){
    //     //fetch and all will be here 
    // }

    // test() {
    //     this.setState())
    // }

    test(){
        this.setState({
            list : [
                {
                    id:1,
                    Name: "Utkarsh"
                },
                {
                    id:1,
                    Name: "Abhimanyu"
                },
                {
                    id:1,
                    Name: "Abhishoya"
                }
            ]
        });
    }
    
    componentWillMount() {
        //fetch_leaderboard()
        this.test();
    }

    render(){

        console.log(this.state.list);
        const codes = contest.result.data.content.problemsList.map(prob => {
            return (prob.problemCode)
        });
        const leaders = leaderboard.result.data.content.map(leader =>
        {
            let probs=[];
            console.log(codes);
            for(let i in codes)
            {
                let flag = true;
                // console.log(leader.problemScore[j]);
                for (let j in leader.problemScore)
                {
                    if(leader.problemScore[j].problemCode===codes[i])
                    {
                        probs.push(<td>{leader.problemScore[j].score}({-leader.problemScore[j].penalty})</td>);
                        flag=false;
                    }
                }
                if(flag)
                {
                    probs.push(<td>0</td>);
                }
            }
            return (
                <tr>
                    <td>{leader.rank}</td>
                    <td>{leader.username}</td>
                    <td>{leader.totalTime}</td>
                    {probs}
                </tr>
            )
        });

        const problems = contest.result.data.content.problemsList.map((prob)=>
        {
            return (
                <th>{prob.problemCode}</th>
            )
        });
                
        return(
            <div>
                <tr>
                    <th>RANK</th>
                    <th>USERNAME</th>
                    <th>TIME</th>
                    {problems}
                </tr>
                {leaders}
            </div>
        )
    }

    
}