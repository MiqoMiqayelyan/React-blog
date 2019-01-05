import React from 'react';
import './NavBar.css';

export const NavBar = function(props){
    return(
        <nav>
            <ul>
                <li className="home"><a href="/">{props.home}</a></li>
                <li className="cinema"><a href="/">{props.cinema}</a></li>
                <li className="magazin"><a href="/">{props.magazin}</a></li>
                <li className="web"><a href="/">{props.web}</a></li>
                <li className="top"><a href="/">{props.top}</a></li>
                <li className="archives"><a href="/">{props.archives}</a></li>
                <li className="contact"><a href="/">{props.contact}</a></li>
            </ul>
        </nav>
    )
} 