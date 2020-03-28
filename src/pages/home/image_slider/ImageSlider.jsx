import React from 'react';
import './image_slider.css';

class ImgSlider extends React.Component{
    state = {
        images : [
            "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2016&q=80",
            "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80", 
            "https://images.unsplash.com/photo-1570216977217-83196ea82dd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
        ],
        idx : 0,
        sz : 3
    };

    // ele =

    next = ()=>{
        this.setState({
            idx : (this.state.idx + 1) % this.state.sz
        });
    }

    render(){
        return  (
            <div id = 'img-slider-outer-div'>
                <label>Image Slider</label>
                <p>
                    This is an image slider component which is used to display images.<br />
                    Click the image to go to next image.
                </p>
                <div>
                    <img src = {this.state.images[this.state.idx] } onClick = {this.next}/>
                </div>
            </div>
        );
    }
    
}
// ReactDOM.render(<ImgSlider/>,document.getElementById('test'));

export default ImgSlider;