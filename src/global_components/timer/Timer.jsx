import React, {Component} from "react";
import styles from './timer.css' 
export default class Timer extends Component{
    state = {
        days:0,
        hours:0,
        minutes:0,
        seconds:0,
        content:"",
    }

    componentDidMount(){

        var countDownDate = new Date(this.props.endDate).getTime();
        var today = Date.now();
        // console.log("Called");
        if(today < new Date(this.props.startDate).getTime())
        {
            this.setState({content:"Contest Yet to Start"});
        }
        else if(today > new Date(this.props.endDate).getTime())
        {
            // console.log("Called");
            this.setState({content:"Contest Ended"});
        }
        else
        {
            this.myInterval = setInterval(() => {
                today = Date.now();
                var distance = countDownDate - today;
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                if (distance < 0) {
                    clearInterval(this.myInterval);
                    days=0;
                    hours=0;
                    minutes=0;
                    seconds=0;
                }
                this.setState({days: days, hours: hours, minutes: minutes, seconds: seconds});
            },1000);
            
        }
    }

    render(){
        var {days,hours,minutes,seconds} = this.state;
        return(
            // <div><label>{min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}</label></div>
            <div>
                {days===0?null:days}{days?":":null}
                {hours===0?null:hours}{hours?":":null}
                {minutes===0?null:minutes}{minutes?":":null}
                {seconds===0?null:seconds}{seconds?"":null}
                {this.state.content}
            </div>
            // <div>
            //     { min === 0 && sec === 0 
            //     ? <h3> Time's up will do something about it</h3> 
            //     : <div><h3>Time Left :</h3><br/><h3>{min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}</h3> </div>
            //     }
            // </div>
        )

    }

}
