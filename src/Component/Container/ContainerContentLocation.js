import '../../assets/css/base.css'
import '../../assets/css/main.css'
import '../../assets/css/grid.css'
import '../../assets/css/responsive.css'
import hanoi from '../../assets/img/hanoi.png';
import TPHCM from '../../assets/img/tphcm.png';
import Dalat from '../../assets/img/dalat.png';
import Danang from '../../assets/img/danang.png';
import HoiAn from '../../assets/img/hoian.png';
import QuangNinh from '../../assets/img/quangninh.png';
import NhaTrang from '../../assets/img/nhatrang.png';
import VungTau from '../../assets/img/vungtau.png';
import '../../main.js';
import '../../assets/fonts/fontawesome-free-5.15.4-web/css/all.min.css'


import React, { Component } from 'react'

function LocationItem(props){
    return(
        <li className="container__content-location-item">
            <a href="" className="container__content-location-link">
                <img
                src={props.imagePath}
                alt=""
                className="container__content-location-img"
                />
                <div className="container__content-location-label">
                <h3 className="container__content-location-city">
                    {props.Location}
                </h3>
                <span className="container__content-location-quantity">
                    <span className="container__content-location-number">
                        {props.Number}
                    </span>
                    chỗ ở
                </span>
                </div>
            </a>
        </li>
    )
}


export default class ContainerContentLocation extends Component {
 
    state = {
        slideIndex: 5,
    };

    showLocationHandle = (n) => {
        const slidesLocation = document.querySelectorAll('.container__content-location-item');
        slidesLocation.forEach((slide, index) => {
            if (index >= n - 5 && index < n) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    };

    prevSlide = () => {
        this.setState((prevState) => {
            const newIndex = prevState.slideIndex <= 5 ? 5 : prevState.slideIndex - 1;
            this.showLocationHandle(newIndex);
            return { slideIndex: newIndex };
        });
    };

    nextSlide = () => {
        this.setState((prevState) => {
            const newIndex = prevState.slideIndex >= 8 ? 8 : prevState.slideIndex + 1;
            this.showLocationHandle(newIndex);
            return { slideIndex: newIndex };
        });
    };

  render() {
    return (
        <div className="container__content-location">
            <h3 className="container__content-heading">
            {this.props.Header}
            Địa điểm nổi bật
            </h3>
            <p className="container__content-descriptions">
            {this.props.content}
            Cùng Luxstay bắt đầu chuyến hành trình chinh phục thế giới của bạn
            </p>
            <div className="container__content-slide">
            <ul className="container__content-location-list">
                {this.props.LocationItems}
                <LocationItem imagePath={hanoi} Location="Hà Nội" Number = "2819" />
                <LocationItem imagePath={TPHCM} Location="TP. Hồ Chí Minh" Number = "2819" />
                <LocationItem imagePath={Danang} Location="Đà Nẵng" Number = "2819" />
                <LocationItem imagePath={Dalat} Location="Đà Lạt" Number = "2819" />
                <LocationItem imagePath={HoiAn} Location="Hội An" Number = "2819" />
                <LocationItem imagePath={QuangNinh} Location="Quảng Ninh" Number = "2819" />
                <LocationItem imagePath={NhaTrang} Location="Nha Trang" Number = "2819" />
                <LocationItem imagePath={VungTau} Location="Vũng Tàu" Number = "2819" />
                
            </ul>
            <button className="container__content-location-btn btn-location container__content-location-btn--left"
                onClick={this.prevSlide}
             >
                <i className="container__content-location-icon fas fa-chevron-left" />
            </button>
            <button className="container__content-location-btn btn-location container__content-location-btn--right"
                onClick={this.nextSlide}
            >
                <i className="container__content-location-icon fas fa-chevron-right" />
            </button>
            </div>
         </div>
      
    )
  }
}
