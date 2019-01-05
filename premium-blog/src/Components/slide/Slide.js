import React from 'react';
import './Slide.css';

export const Slide = (props) => {
  const bgColor = {
    background : `#${props.bg}`
  }
  return <div className="slide" >
            <img src={props.img} alt={props.title} />
            <p style={bgColor}>{props.title}</p>
         </div>
}

