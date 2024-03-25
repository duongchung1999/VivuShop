import transaction1_imgpath from '../../assets/img/transaction1.svg';
import transaction2_imgpath from '../../assets/img/transaction2.svg';
import transaction3_imgpath from '../../assets/img/transaction3.svg';

import React, { Component } from 'react'

export default class FooterSecure extends Component {
  render() {
    return (
        <div className="col-1260 l-5-4 m-4 c-12">
            <h4 className="footer__content-heading margin-top-40">
            SECURE YOUR TRANSACTION
            </h4>
            <div className="footer__content-transaction">
                <ImageSource imagePath={transaction1_imgpath}/>
                <ImageSource imagePath={transaction2_imgpath}/>
                <ImageSource imagePath={transaction3_imgpath}/>
            </div>
      </div>
    )
  }
}
function ImageSource(props){
    return(
        <img
            src={props.imagePath}
            alt=""
            className="footer__content-transaction-img"
        />
    )
}
