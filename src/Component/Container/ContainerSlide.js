import '../../assets/css/base.css'
import '../../assets/css/main.css'
import '../../assets/css/grid.css'
import '../../assets/css/responsive.css'
import slide1 from '../../assets/img/slide1.png';
import slide2 from '../../assets/img/slide2.png';
import { currentSlide } from '../../main.js';
 import '../../main.js';
import '../../assets/fonts/fontawesome-free-5.15.4-web/css/all.min.css'

import React, { Component } from 'react'

function SlideItem(props){
    return (
        <li className="container__slide-item">
            <a href="" className="container__slide-link">
                <img
                src={props.slide}
                alt=""
                className="container__slide-img"
                />
            </a>
        </li>
    )
}




export default class ContainerSlide extends Component {
    
  render() {
    return (
      <div>
        <nav className="container__slide">
            <ul className="container__slide-list">
                <SlideItem slide={slide1}/>
                <SlideItem slide={slide2}/>
                <div className="container__slide-dot">
                    <div
                        onClick={() => currentSlide(1)}
                        className="container__slide-dot-item container__slide-dot-item--active"
                    />
                    <div 
                    onClick={() => currentSlide(2)}
                    className="container__slide-dot-item" />
                </div>
            </ul>
        </nav>
      </div>
    )
  }
}

