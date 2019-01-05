import React from 'react';
import './RightBlock_navBar.css';

export const RightBlockNavBAr = (props)=>{
    return(
        <div className="rightmenu" onClick={props.changeNavBarContent}>
                <button  className="first">{props.first} </button>
                <button  className="second">{props.second}</button>
                <button  className="thurd">{props.thurd}</button>
        </div>
    )
}