import React, { Component } from 'react'

export default class SuccessSection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list : []
        }
        
        this.test = this.test.bind(this)
        this.fetch_successful_submission = this.fetch_successful_submission.bind(this);
    }

    fetch_successful_submission() {
        // 
    }

    test() {
        this.setState({
            list:
                [
                    {
                        name: "Abhimanyu",
                        lang: "Java"
                    },
                    {
                        name: "Utkarsh",
                        lang: "c++"
                    },
                    {
                        name: "Abhishoy",
                        lang: "python"
                    }
                ]
        });
    }

    componentDidMount() {
        this.test();
    }

    // componentDidUpdate() {
    //     // fetch new list and update the state
        
    // }

    render() {

        let e = <div>
                    {this.state.list.map(i => (
                        <div>
                            {i.name} {i.lang}
                        </div>
                    ))}
                </div>

        return (
            <div>
                <div>Successful Submission</div>
                {e}                
            </div>
        )
    }
}
