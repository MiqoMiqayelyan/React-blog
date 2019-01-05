import React from 'react';
import './LikeList.css';
import {LikeListContent} from '../like-list-content/LikeListContent';

let photo = "https://kinosave.ru/uploads/posts/2017-02/1488190694_poster-984331.jpg"
export const LikeList = (props) => {
    return(
        <div className="like-list">
            <h3>You Might Olso Like</h3>
            <LikeListContent src={photo}/>
            <LikeListContent src={photo}/>
            <LikeListContent src={photo}/>
            <LikeListContent src={photo}/>
        </div>
    )
}