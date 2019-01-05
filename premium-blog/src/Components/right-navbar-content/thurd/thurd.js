import React from 'react';
import '../main.css';

export const Thurd = (props) => {
    return(
        <div>
            <div className="first-content">
                <div className="first-photo">
                    <img src={props.src} alt="First content" />
                </div>
                <div className="first-text">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                
                </div>
            </div>
            <hr />    
        </div>
    )
}