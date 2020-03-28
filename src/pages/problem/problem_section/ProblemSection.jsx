import React, { Component } from 'react'
import "./problem_section.css"

export default class ProblemSection extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            problem_id: "",
            problem_txt: "",
            sample_io :[]
        }

        this.fetch_problem = this.fetch_problem.bind(this);
        this.test = this.test.bind(this);
    }

    test() {
        this.setState({
            problem_id: "12AB",
            problem_txt: 
                        `You are given a sequence a1,a2,…,an consisting of n non-zero integers (i.e. ai≠0).

                        You have to calculate two following values:

                        the number of pairs of indices (l,r) (l≤r) such that al⋅al+1…ar−1⋅ar is negative;
                        the number of pairs of indices (l,r) (l≤r) such that al⋅al+1…ar−1⋅ar is positive;
                        
                        Input:
                        The first line contains one integer n (1≤n≤2⋅10^5) — the number of elements in the sequence.

                        The second line contains n integers a1,a2,…,an (−10^9≤ai≤10^9;ai≠0) — the elements of the sequence.

                        Output
                        Print two integers — the number of subsegments with negative product and the number of subsegments with positive product, respectively.`,
            sample_io :[
                {
                    in:"5 5 -3 3 -1 1",
                    out:"8 7"
                },
                {
                    in:"10 4 2 -4 3 1 2 -4 3 2 3",
                    out:"28 27"
                },
                {
                    in:"5 -1 -2 -3 -4 -5",
                    out:"9 6"
                }
            ]
        })

        //sample_io is an array object {input : " " , output = " "}
    }

    fetch_problem() {
        //fetch the problem given the id of the problem recieved as a prop
    }

    componentDidMount() {
        // fetch_problem();
        this.test();
    }


    render() {

        let IO =
            <>
                {this.state.sample_io.map(sio => (
                    <div>
                        <h4>Sample Input</h4>
                    
                        <div classname="sample_in">
                            {sio.in}
                        </div>

                        <h4>Sample Output</h4>
                        
                        <div classname="sample_out">
                            {sio.out}
                        </div>
                    </div>
                ))}
            </>
        

        return (
            <div>
                <div dangerouslySetInnerHTML={{__html: this.props.data.body}}></div>
                {/* <label classname="prb">{this.state.problem_txt}</label>
                <div>{IO}</div> */}
            </div>
        )
    }
}
