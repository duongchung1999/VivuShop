import travelDiscover1_ImagePath from '../../assets/img/travelDiscover1.jpg';
import travelDiscover2_ImagePath from '../../assets/img/travelDiscover2.jpg';
import travelDiscover3_ImagePath from '../../assets/img/travelDiscover3.jpg';
import travelDiscover4_ImagePath from '../../assets/img/travelDiscover4.jpg';
import travelDiscover5_ImagePath from '../../assets/img/travelDiscover5.jpg';
import travelDiscover6_ImagePath from '../../assets/img/travelDiscover6.jpg';

import React, { Component } from 'react'

export default class ContainerDiscover extends Component {
    state = {
        slideIndex: 4,
    };
   

    showLocationHandle = (n) => {
        const slidesLocation = document.querySelectorAll('.container__content-discover-item');
        slidesLocation.forEach((slide, index) => {
            if (index >= n - 4 && index < n) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    };

    prevSlide = () => {
        this.setState((prevState) => {
            const newIndex = prevState.slideIndex <= 4 ? 4 : prevState.slideIndex - 1;
            this.showLocationHandle(newIndex);
            return { slideIndex: newIndex };
        });
    };

    nextSlide = () => {
        this.setState((prevState) => {
            const newIndex = prevState.slideIndex >= 7 ? 7 : prevState.slideIndex + 1;
            this.showLocationHandle(newIndex);
            return { slideIndex: newIndex };
        });
    };
  render() {
    return (
        <div className="container__content-discover">
            <h3 className="container__content-heading">Gợi ý khám phá</h3>
            <p className="container__content-descriptions">
            Để mỗi chuyến đi là một hành trình truyền cảm hứng, mỗi căn phòng là một
            khoảng trời an yên
            </p>
            <div className="container__content-slide">
            <ul className="row-1260 container__content-discover-list">
                <DiscoverItem 
                    imagePath={travelDiscover2_ImagePath} 
                    Information ="THÔNG TIN HOMESTAY" 
                    Content = "5 resort hạng sang ở Việt Nam xuất hiện trên tạp chí du lịch Anh"
                />
                <DiscoverItem 
                    imagePath={travelDiscover3_ImagePath} 
                    Information ="THÔNG TIN HOMESTAY" 
                    Content = "5 resort hạng sang ở Việt Nam xuất hiện trên tạp chí du lịch Anh"
                />
                <DiscoverItem 
                    imagePath={travelDiscover2_ImagePath} 
                    Information ="THÔNG TIN HOMESTAY" 
                    Content = "5 resort hạng sang ở Việt Nam xuất hiện trên tạp chí du lịch Anh"
                />
                <DiscoverItem 
                    imagePath={travelDiscover3_ImagePath} 
                    Information ="THÔNG TIN HOMESTAY" 
                    Content = "5 resort hạng sang ở Việt Nam xuất hiện trên tạp chí du lịch Anh"
                />
                <DiscoverItem 
                    imagePath={travelDiscover2_ImagePath} 
                    Information ="THÔNG TIN HOMESTAY" 
                    Content = "5 resort hạng sang ở Việt Nam xuất hiện trên tạp chí du lịch Anh"
                />
                <DiscoverItem 
                    imagePath={travelDiscover3_ImagePath} 
                    Information ="THÔNG TIN HOMESTAY" 
                    Content = "5 resort hạng sang ở Việt Nam xuất hiện trên tạp chí du lịch Anh"
                />
                
            </ul>
            <button className="container__content-location-btn container__content-discover-btn container__content-location-btn--left"
            onClick={this.prevSlide}>
                <i className="container__content-location-icon fas fa-chevron-left" />
            </button>
            <button className="container__content-location-btn container__content-discover-btn container__content-location-btn--right"
            onClick={this.nextSlide}>
                <i className="container__content-location-icon fas fa-chevron-right" />
            </button>
            </div>
      </div>
      
    )
  }
}

function DiscoverItem(props){
    return(
        <li className="col-1260 l-4 m-12 c-12 container__content-discover-item">
                <a href="" className="container__content-discover-link">
                    <img
                    src={props.imagePath}
                    alt=""
                    className="container__content-discover-img"
                    />
                    <div className="container__content-discover-content">
                    <div className="container__content-discover-label">
                        <span className="container__content-discover-text">
                        {props.Information}
                        </span>
                    </div>
                    <div className="container__content-discover-inform">
                        <span>
                        {props.Content}
                        </span>
                    </div>
                    </div>
                </a>
                </li>
    )
}
