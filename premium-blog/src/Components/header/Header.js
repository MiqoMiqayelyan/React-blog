import React from 'react';
import './Header.css';
import {NavBar} from '../nav-bar/NavBar';

export const Header = (props) => {
    return(
        <header>
            <div className="wrapper">
                <div className="logo-div">
                    <div className="logo">
                        <span className="m">M</span>
                        <span className="a">a</span>
                        <span className="g">g</span>
                        <span className="b">B</span>
                        <span className="l">l</span>
                        <span className="o">o</span>
                        <span className="g2">g</span>
                    </div>
                    <div className="search">
                        <input type="text" className="text"/>
                        <input type="button" className="button" value="SEARCH"/>
                    </div>
                    <div className="social">
                        <div className="internet"></div>
                        <div className="facebook"></div>
                        <div className="twiter"></div>
                    </div>

                </div>
                <NavBar 
                home="HOME"
                cinema="CINEMA"
                magazin="MAGAZIN"
                web="CSSAUTHOR.COM"
                top="TOPMENU"
                archives="ARCHIVES"
                contact="CONTACT US"
                />
            </div>
            
            
        </header>
    )
}