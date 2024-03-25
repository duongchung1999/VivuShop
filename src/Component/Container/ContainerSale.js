import sale1_img from '../../assets/img/sale1.jpg';
import sale2_img from '../../assets/img/sale2.jpg';
import sale3_img from '../../assets/img/sale3.jpg';

import React, { Component } from 'react'

export default class ContainerSale extends Component {
    state = {
        slideIndex: 2,
    };
   

    showLocationHandle = (n) => {
        const slidesLocation = document.querySelectorAll('.container__content-slide-item');
        slidesLocation.forEach((slide, index) => {
            if (index >= n - 2 && index < n) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    };

    prevSlide = () => {
        this.setState((prevState) => {
            const newIndex = prevState.slideIndex <= 2 ? 2 : prevState.slideIndex - 1;
            this.showLocationHandle(newIndex);
            return { slideIndex: newIndex };
        });
    };

    nextSlide = () => {
        this.setState((prevState) => {
            const newIndex = prevState.slideIndex >= 3 ? 3 : prevState.slideIndex + 1;
            this.showLocationHandle(newIndex);
            return { slideIndex: newIndex };
        });
    };
    

  render() {
    return (
        <div className="container__content-sale">
            <h3 className="container__content-heading">Ưu đãi độc quyền</h3>
            <p className="container__content-descriptions">
            Chỉ có tại Luxstay, hấp dẫn và hữu hạn, book ngay!
            <a href="" className="container__content-descriptions-link hide-on-M">
                Xem thêm
            </a>
            </p>
            <div className="container__content-slide">
            <ul className="row-1260 container__content-slide-list">
                <ListSale imagePath={sale1_img}/>
                <ListSale imagePath={sale2_img}/>
                <ListSale imagePath={sale3_img}/>
            </ul>
            <button className="container__content-location-btn container__content-sale-btn container__content-location-btn--left"
            onClick={this.prevSlide}>
                <i className="container__content-location-icon fas fa-chevron-left" />
            </button>
            <button className="container__content-location-btn container__content-sale-btn container__content-location-btn--right"
             onClick={this.nextSlide}>
                <i className="container__content-location-icon fas fa-chevron-right" />
            </button>
            </div>
            <a href="" className="container__content-descriptions-link-mobile">
            Xem thêm
            </a>
        </div>
      
    )
  }
}
function ListSale(props){
    return(
        <li className="col-1260 l-4 m-6 c-12 container__content-slide-item">
            <a href="" className="container__content-slide-list-link">
                <img
                src={props.imagePath}
                alt=""
                className="container__content-sale-img"
                />
            </a>
        </li>
    )
}
