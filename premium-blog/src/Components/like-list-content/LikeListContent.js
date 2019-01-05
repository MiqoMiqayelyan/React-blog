import React from 'react';

export const LikeListContent = (props) => {
    return(
        <div className="like-list-content">
            <div>
                <img src={props.src} alt="some photo"/>
            </div>
            <div>
                <p>Some text</p>
                <a href="/">Medication >></a>
            </div>
        </div>
    )
}