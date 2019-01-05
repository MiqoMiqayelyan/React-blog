import React, { Component } from 'react';
import {Slide} from '../slide/Slide';
import {RightArrow} from '../arrows/Arrows';
import {LeftArrow} from '../arrows/Arrows';
import './Slider.css';
import data from '../../data/data';


export default class Slider extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        properties: data.properties,
        property: data.properties[0]

      }
    }
    goToPrevSlide = () => {
      const newIndex = this.state.property.index-1;
      if(this.state.property.index === 0){
        this.setState({
          property: data.properties[3]
        })
      }else{
        this.setState({
          property: data.properties[newIndex]
        })
      }
    }
      
    
    
    goToNextSlide = () => {
      const newIndex = this.state.property.index+1;
      if(this.state.property.index === 3){
        this.setState({
          property: data.properties[0]
        })
      }else{
        this.setState({
          property: data.properties[newIndex]
        })
      }
    }
    
  
    render() {
      return (
        
        <section className="slider">
          <h2>Top Stories</h2> 
          
          <Slide 
          img={this.state.property.picture}
          title={this.state.property.title}
          bg={this.state.property.bg}
          />
          <RightArrow  
          goToNextSlide={this.goToNextSlide}
          />
          <LeftArrow  
          goToPrevSlide={this.goToPrevSlide}
          />
          </section>
      );
    }
  }