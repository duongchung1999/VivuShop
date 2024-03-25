import sugges1_imgPath from '../../assets/img/sugges1.jpg';
import sugges2_imgPath from '../../assets/img/sugges2.jpg';
import sugges3_imgPath from '../../assets/img/sugges3.jpg';
import sugges4_imgPath from '../../assets/img/sugges4.jpg';
import sugges5_imgPath from '../../assets/img/sugges5.jpg';
import sugges6_imgPath from '../../assets/img/sugges6.jpg';
import sugges7_imgPath from '../../assets/img/sugges7.jpg';
import React, { Component } from 'react'

export default class ContainerSugest extends Component {
    state = {
        slideIndex: 4,
    };
   

    showLocationHandle = (n) => {
        const slidesLocation = document.querySelectorAll('.container__content_suggestions_item');
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
        <div className="container__content-suggestions">
        <h3 className="container__content-heading">Gợi ý từ Luxstay</h3>
        <p className="container__content-descriptions">
          Những địa điểm thường đến mà Luxstay gợi ý dành cho bạn
        </p>
        <div className="container__content-slide">
          <ul className="row-1260 container__content-suggestions-list">
            <SugestItem 
                imgPath={sugges1_imgPath} 
                CityNote="VI VU NGOẠI THÀNH HÀ NỘI" 
                Content = "Trải nghiệm không gian thoáng đãng cho chuyến đi ngay gần Hà Nội"
            />
            <SugestItem 
                imgPath={sugges2_imgPath} 
                CityNote="BIỆT THỰ HỒ BƠI VŨNG TÀU" 
                Content = "Trải nghiệm bể bơi thượng hạng ngay Tại Vũng Tàu"
            />
            <SugestItem 
                imgPath={sugges3_imgPath} 
                CityNote="NỘI THÀNH LÃNG MẠN" 
                Content = "Trải nghiệm thư giãn trong lành tại Nội thành Hà Nội"
            />
            <SugestItem 
                imgPath={sugges4_imgPath} 
                CityNote="SÀI GÒN RELAX" 
                Content = "Tận hưởng sự thư giãn 5 sao tại Sài Gòn"
            />
            <SugestItem 
                imgPath={sugges5_imgPath} 
                CityNote="BỂ BƠI & BBQ" 
                Content = "Tận hưởng bữa tiệc ngay trên bể bơi tại Sài Gòn"
            />
            <SugestItem 
                imgPath={sugges6_imgPath} 
                CityNote="SÀI GÒN SIÊU ƯU ĐÃI" 
                Content = "Trải nghiệm chuyến đi tiết kiệm tài Sài Gòn"
            />
            <SugestItem 
                imgPath={sugges7_imgPath} 
                CityNote="TRUNG TÂM SÀI GÒN" 
                Content = "Khu nghỉ dưỡng tiện nghi ngay gần trung tâm Sài Gòn"
            />
          </ul>
          <button className="container__content-location-btn container__content-suggestions-btn container__content-location-btn--left"
          onClick={this.prevSlide}>
            <i className="container__content-location-icon fas fa-chevron-left" />
          </button>
          <button className="container__content-location-btn container__content-suggestions-btn container__content-location-btn--right"
          onClick={this.nextSlide}>
            <i className="container__content-location-icon fas fa-chevron-right" />
          </button>
        </div>
      </div>
      
    )
  }
}

function SugestItem(props){
    return(
        <li className="col-1260 l-3 m-6 c-12 container__content_suggestions_item">
            <a href="" className="container__content-suggestions-link">
            <img
                src={props.imgPath}
                alt=""
                className="container__content-suggestions-img"
            />
            <div className="container__content-suggestions-label">
                <span className="container__content-suggestions-city">
                {props.CityNote}
                </span>
                <span className="container__content-suggestions-description">
                {props.Content}
                </span>
            </div>
            </a>
        </li>
    )
}
