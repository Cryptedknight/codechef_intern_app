import React, { Component } from 'react'
import ImageSlider from './image_slider/ImageSlider'
import LoginPage from './login/LoginPage'
export default class Home extends Component {
    render() {
        return (
            <>
                <div className="flexed">
                    <div>
                        <LoginPage/>
                    </div>
                </div>
            </>
        )
    }
}
