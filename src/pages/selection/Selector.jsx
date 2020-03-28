import React, { Component } from 'react'
import Autocomplete from 'react-autocomplete';
import Logout from '../../global_components/logout/Logout'
import './selector.css'
import { withRouter } from 'react-router-dom';

const contests = require('../../contests');

class Selector extends Component {
    constructor(props) {
      super(props);

        this.state = {
            results : [],
            isContestCodeSelected: 0,
            problem_id : "Enter Problem Code",
            value: "",
            item:{},
        }

        this.onRadioChange = this.onRadioChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
    }

    onRadioChange() {
        let c = this.state.isContestCodeSelected ^ 1
        this.setState({
            isContestCodeSelected : c
        })
    }

    onTextChange(evt){
        this.setState({
          problem_id : evt.target.value
        })
    }

    onButtonClick(){
        //Make a request for the stored problem id according to the radio button selected
        // console.log(this.state.value);
        if(contests.result.data.content.contestList.indexOf(this.state.item) > -1)
        {
            if(this.state.item.code===this.state.value || this.state.item.name===this.state.value)
            {
                this.props.history.push(`/contest/${this.state.item.code}`)
            }
        }
    }

    fetchdata = async endpoint =>{
        const response = await fetch(endpoint)
        console.log("this",response);
        const json = await response.json()
        console.log(json)
        this.setState({
            results : json
        });
    }
    options = {
        method : "GET",
        headers : {
            Authorization: '2908e5281a30749be4ba780da4ac5f57b831b94c',
            "Content-Type": "application/json",
        },
    }

    
    componentDidMount(){
        console.log("this")
        this.fetchdata("https://api.codechef.com/contests/",this.options)
    }

    render() {
        
       let radio_buttons = 
       <div>
           <input type="radio" value="contest-name" checked={!this.state.isContestCodeSelected} onChange={this.onRadioChange}/>
            Contest Name
           <input type="radio" value="contest-code" checked={this.state.isContestCodeSelected} onChange={this.onRadioChange}/>
           Contest Code
       </div>;

        return (
            <>
                <div className="searchbar">
                    {radio_buttons}
                    {/* <input type="text" value= {this.state.problem_id} onChange = {this.onTextChange} /> */}
                    <Autocomplete 
                        getItemValue={(item) => this.state.isContestCodeSelected?item.code:item.name}
                        items={contests.result.data.content.contestList}
                        renderItem={(item, isHighlighted) =>
                            this.state.isContestCodeSelected?
                                (item.code.toLowerCase().indexOf(this.state.value.toLowerCase()) > -1 ?
                                <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                                    {item.code}
                                </div> : <div></div>):
                                (item.name.toLowerCase().indexOf(this.state.value.toLowerCase()) > -1 ?
                                <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                                    {item.name}
                                </div> : <div></div>)
                        }
                        value={this.state.value}
                        onChange={(e) => this.setState({value: e.target.value})}
                        onSelect={(val,item) => this.setState({value: val,item: item})}>
                    </Autocomplete>
                    <button onClick = {this.onButtonClick.bind(this)}>Open</button>
                </div>
                <div className="logout">
                    <Logout />
                </div>
            </>
        );
    }
}
export default withRouter(Selector);