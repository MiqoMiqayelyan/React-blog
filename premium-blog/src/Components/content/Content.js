import React, { Component } from 'react';
import './Content.css';

export default class Content extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        cover: "https://pmcvariety.files.wordpress.com/2017/04/avatar.jpg?w=1000",
        alt: 'Avatar picter'
         
      }
    }
    changeCover = (e) => {
        if(e.target.tagName === 'IMG'){ //check is click  img
            this.setState({
                cover: e.target.src //give onclick img
            })
        }
    }
    render(){
        return(
        
            <section className="content">
                <div className="day">{this.props.day}</div>
                <div className="mount">{this.props.mount}</div>
                <h2> Lorem ipsum dolor sit amet consectetur</h2>
                <p className="content-text">  
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Cupiditate obcaecati inventore corporis exercitationem beatae dolores est, 
                odit deleniti cum consectetur nulla pariatur esse vero similique velit
                consequatur, aspernatur reprehenderit ut expedita quidem rem commodi 
                officia neque quae! Beatae, dolores ut.</p>
                <div className="cover-conteiner" onClick={this.changeCover}>
                    <div className="cover">
                        <img src={this.state.cover} alt={this.state.alt}/>
                    </div>
                    <div className="all-covers">
                        <div className="small-covers">
                            <img src="https://www.slashfilm.com/wp/wp-content/images/avatar-neytiri-sad.jpg" alt=""/>
                        </div>
                        <div className="small-covers">
                            <img src="https://cdn3.movieweb.com/i/article/ofOR4czetrKcYg6L4zeEWYWke9y9VR/798:50/Avatar-4-Avatar-5-Production-Start-Sigourney-Weaver.jpg" alt="" />
                        </div>
                        <div className="small-covers">
                            <img src="https://nerdist.com/wp-content/uploads/2016/01/Avatar-Delay-012216.jpg" alt="" />
                        </div>
                        <div className="small-covers">
                            <img src="https://storge.pic2.me/upload/437/57cb166d3f4ea.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="categori">
                    <p>Category:Movie  <span className="comment-icon"></span> <span>5 comments</span></p>
                    <a href="/">Read more</a>
                </div>
                <a href="/">{this.props.older}</a>
            </section>
        
        )
    }
}    