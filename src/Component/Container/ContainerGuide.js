import guide_imagePath1 from '../../assets/img/guide1.jpg';
import guide_imagePath2 from '../../assets/img/guide2.jpg';
import guide_imagePath3 from '../../assets/img/guide3.jpg';
import guide_imagePath4 from '../../assets/img/guide4.jpg';
import guide_imagePath5 from '../../assets/img/guide5.jpg';

import React, { Component } from 'react'

export default class ContainerGuide extends Component {
    state = {
        slideIndex: 3,
    };
   

    showLocationHandle = (n) => {
        const slidesLocation = document.querySelectorAll('.container__content-guide-item');
        slidesLocation.forEach((slide, index) => {
            if (index >= n - 3 && index < n) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    };

    prevSlide = () => {
        this.setState((prevState) => {
            const newIndex = prevState.slideIndex <= 3 ? 3 : prevState.slideIndex - 1;
            this.showLocationHandle(newIndex);
            return { slideIndex: newIndex };
        });
    };

    nextSlide = () => {
        this.setState((prevState) => {
            const newIndex = prevState.slideIndex >= 5 ? 5 : prevState.slideIndex + 1;
            this.showLocationHandle(newIndex);
            return { slideIndex: newIndex };
        });
    };
  render() {
    return (
        <div className="container__content-guide">
            <h3 className="container__content-heading">Hướng dẫn sử dụng</h3>
            <p className="container__content-descriptions">
            Đặt chỗ nhanh, thanh toán đơn giản, sử dụng dễ dàng
            </p>
            <div className="container__content-slide">
            <ul className="row-1260 container__content-discover-list">
                <GuieItems ImagePath={guide_imagePath1}/>
                <GuieItems ImagePath={guide_imagePath2}/>
                <GuieItems ImagePath={guide_imagePath3}/>
                <GuieItems ImagePath={guide_imagePath4}/>
                <GuieItems ImagePath={guide_imagePath5}/>
            </ul>
            <button className="container__content-location-btn container__content-guide-btn container__content-location-btn--left"
             onClick={this.prevSlide}>
                <i className="container__content-location-icon fas fa-chevron-left" />
            </button>
            <button className="container__content-location-btn container__content-guide-btn container__content-location-btn--right"
            onClick={this.nextSlide}>
                <i className="container__content-location-icon fas fa-chevron-right" />
            </button>
            </div>
      </div>
      
    )
  }
}

function GuieItems(props){
    
    return(
        <li className="col-1260 l-4 m-6 c-12 container__content-guide-item">
            <a
                href=""
                className="container__content-discover-link container__content-guide-link"
            >
                <img
                src={props.ImagePath}
                alt=""
                className="container__content-discover-img"
                />
            </a>
        </li>
    )
}
