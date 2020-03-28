import React, { Component } from 'react'

export default class SubmitSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            code:""
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnChange(ev) {
        this.setState({
            code : ev.target.value
        })
    }

    handleOnClick() {
        //submit the code
    }

    render() {
        const languages = this.props.data.languagesSupported.map(lang => {
            return(
                lang===null?null:<option>{lang}</option>
            )
        });
        return (
            <>
                <div>
                    <div className="languages">
                        Choose Your Language:&nbsp;
                        <select id="language">
                            {languages}
                        </select>
                    </div>
                    <textarea className="txt" rows="10" cols="100" onChange={this.handleOnChange}>
                        {this.state.code}
                    </textarea>       
                </div>
                <div>
                    <button className = "submit" onClick={this.handleOnClick}>Submit</button>
                </div>
            </>
        )
    }
}
