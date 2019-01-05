import React, { Component } from 'react';
import './App.css';
import './responsive.css';
import {Header} from './Components/header/Header';
import Slider from './Components/slider/Slider';
import Content from './Components/content/Content';
import RightBlock from './Components/right-block/RightBlock';
import {Footer} from './Components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <div className="wrapper">
              <Slider />
              <div className="flex-content">
                <div id="content-div">
                  <Content 
                  day='28'
                  mount='FEB'
                  />
                  <Content 
                  day='28'
                  mount='FEB'
                  older="<< older posts"
                  />
                </div>
                <div className="rightblock">
                  <RightBlock />
                </div>
              </div>
          </div>
              
          
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
