import React, { Component } from 'react'
import imgQRcode from '../../assets/img/qr-code.png';
import imgAppStore from '../../assets/img/apple-store.svg';
import imgChPlay from '../../assets/img/google-play.svg';
import imgHuawei from '../../assets/img/huawei.svg';

export default class FooterDowloadApp extends Component {
  render() {
    return (
        <div className="row footer__content-downloadapp">
            <div className="col l-6 m-0 footer__content-qrcode">
            <img
                style={{ width: 88, height: 88 }}
                src={imgQRcode}
                alt=""
                className="footer__content-qr"
            />
            </div>
            <div className="col l-6 m-12 row footer__content-app">
            {/* <div class="row"> */}
                <ImageApp imagePath={imgAppStore}/>
                <ImageApp imagePath={imgChPlay}/>
                <ImageApp imagePath={imgHuawei}/>
            {/* </div> */}
            </div>
      </div>
      
    )
  }
}
function ImageApp(props){
    return(
        <a
            href={props.link}
            className="col l-12 m-12 footer__content-app-link"
            >
            <img
            src={props.imagePath}
            alt=""
            className="footer__content-app-img"
            />
        </a>

    )
}
