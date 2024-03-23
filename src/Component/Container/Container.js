import ContainerSlide from "./ContainerSlide";
import ContainerHeading from "./ContainerHeading";
import ContainerContentLocation from "./ContainerContentLocation";
import hanoi from '../../assets/img/hanoi.png';
import TPHCM from '../../assets/img/tphcm.png';
import Dalat from '../../assets/img/dalat.png';
import Danang from '../../assets/img/danang.png';
import HoiAn from '../../assets/img/hoian.png';
import QuangNinh from '../../assets/img/quangninh.png';
import NhaTrang from '../../assets/img/nhatrang.png';
import VungTau from '../../assets/img/vungtau.png';

import React, { Component } from 'react'

export default class Container extends Component {
  render() {
    return (
      <div className="container">
        <ContainerSlide/>
        <div className='grid wide-1260'>
            <ContainerHeading/>
            <div className="container__content">
                <ContainerContentLocation />
            </div>
        </div>
      </div>
    )
  }
}

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

function LocationReview(){
    return(
        <div>
            <LocationItem imagePath={hanoi} Location="Hà Nội" Number = "2819" />
            <LocationItem imagePath={TPHCM} Location="TP. Hồ Chí Minh" Number = "2819" />
            <LocationItem imagePath={Danang} Location="Đà Nẵng" Number = "2819" />
            <LocationItem imagePath={Dalat} Location="Đà Lạt" Number = "2819" />
            <LocationItem imagePath={HoiAn} Location="Hội An" Number = "2819" />
            <LocationItem imagePath={QuangNinh} Location="Quảng Ninh" Number = "2819" />
            <LocationItem imagePath={NhaTrang} Location="Nha Trang" Number = "2819" />
            <LocationItem imagePath={VungTau} Location="Vũng Tàu" Number = "2819" />
        </div>
    )
}

