import React from 'react';
import './Arrows.css';

export const RightArrow = (props) => {
    return(
        <div className="right-arrow" onClick={props.goToNextSlide}></div>
    )
}

export const LeftArrow = (props) => {
    return(
        <div className="left-arrow" onClick={props.goToPrevSlide}></div>
    )
}