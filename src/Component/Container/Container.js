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
// import sugges1 from '../../assets/img/sugges1.png';
// import sugges2 from '../../assets/img/sugges2.png';
import LocationItemList from './LocationItemList.js';
import ContainerSale from "./ContainerSale.js";
import ContainerSugest from "./ContainerSugest.js";
import ContainerDiscover from "./ContainerDiscover.js";
import ContainerGuide from "./ContainerGuide.js";
import ContainerFooter from "./ContainerFooter.js";

import React, { Component } from 'react'

export default class Container extends Component {
  render() {
    return (
      <div className="container">
        <ContainerSlide/>
        <div className='grid wide-1260'>
            <ContainerHeading/>
            <div className="container__content">
                <ContainerContentLocation 
                    Header="Địa điểm nổi bật" 
                    Content="Cùng Luxstay bắt đầu chuyến hành trình chinh phục thế giới của bạn" 
                    LocationReview = {<LocationReview1/>}
                />
                {/* <ContainerContentLocation 
                    Header="Ưu đãi độc quyền" 
                    Content="Chỉ có tại Luxstay, hấp dẫn và hữu hạn, book ngay!" 
                    LocationReview = {<LocationReview1/>}
                /> */}
                <ContainerSale/>
                <ContainerSugest/>
                <ContainerDiscover/>
                <ContainerGuide/>
            </div>
            <ContainerFooter/>
        </div>
        
      </div>
    )
  }
}

function LocationReview1(){
    return(
        <div>
            <ul className="container__content-location-list">
                <LocationItemList imagePath={hanoi} Location="Hà Nội" Number = "2819" />
                <LocationItemList imagePath={TPHCM} Location="TP. Hồ Chí Minh" Number = "3200" />
                <LocationItemList imagePath={Danang} Location="Đà Nẵng" Number = "1680" />
                <LocationItemList imagePath={Dalat} Location="Đà Lạt" Number = "780" />
                <LocationItemList imagePath={HoiAn} Location="Hội An" Number = "700" />
                <LocationItemList imagePath={QuangNinh} Location="Quảng Ninh" Number = "905" />
                <LocationItemList imagePath={NhaTrang} Location="Nha Trang" Number = "285" />
                <LocationItemList imagePath={VungTau} Location="Vũng Tàu" Number = "272" />
            </ul>
           
        </div>
    )
}




